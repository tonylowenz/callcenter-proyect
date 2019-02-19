'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swaggered');
const Path = require('path');
const Glob = require('glob');
const Util = require('util');
const Hoek = require('hoek');

const server = Hapi.Server({
    port: 3000,
    host: 'localhost'
});

const swaggerOptions = {
    info: {
        title: 'Mobile API',
        version: '1.0.1',
    }
};

const dbOpts = {
    url: 'mongodb://bob_user:328bu5ad@ds139295.mlab.com:39295/mobiletemplate',
    settings: {
        poolSize: 10
    },
    decorate: true
};

const init = async () => {
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        },
        {
            plugin: require('hapi-swaggered-ui'),
            options: {
                title: 'Mobile API',
                path: '/docs',
                authorization: {
                    field: 'apiKey',
                    scope: 'query',
                    defaultValue: 'demoKey',
                    placeholder: 'Enter your apiKey here'
                },
                swaggerOptions: {
                    validatorUrl: null
                }
            }
        },
        {
            plugin: require('hapi-mongodb'),
            options: dbOpts
        }
    ]);
	
	server.route({
		method : 'GET', path : '/public/{path*}', handler : {
			directory : {
				path : Path.join(__dirname, 'public'),
				listing : false,
				index : false
			}
		}
	});

    const absolutePattern = Path.join('routes', '**', '**/!(_)*.js');
    const glob = Util.promisify(Glob);
    const files = await glob(absolutePattern, {});

    const routes = files.map((file) => {
        return Hoek.clone(require(Path.join(process.cwd(), file)));
    });

    await routes.forEach((route) => {
        server.route(route);
    });

    await server.start();
    console.log(`Server is running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (error) => {
    console.log(error);
    process.exit();
});

init();