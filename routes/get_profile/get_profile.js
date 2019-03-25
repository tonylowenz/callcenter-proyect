const joi = require('joi'); 
var handler = require('./_'+__filename.split(/[\\/]/).pop()); 

module.exports = { 
	method: 'get',
	path: '/get_profile',
	config: { 
		description: 'Get Profile - returns profile data',
		notes: 'Get Profile - returns profile data',
		tags: ['api'],
		validate: {
			query: {
				auth: joi.string().required()
			}
		}
	}, handler: async (request, h) => { 
		return handler.handler(request, h); 
	} 
}