'use strict';
const assert = require('assert');
const jwt = require('jsonwebtoken')
const mysql = require('mysql');

module.exports.handler = function(request, h){
	const promise = new Promise((resolve, reject) => {
		try{
			jwt.verify(request.query.auth, 'secret', function(err, decoded) {
		    	if (err) { resolve('Invalid Code') }else{
		    		main(decoded.id, request, function(response){
						resolve(response);
					});
		    	}
		    });
		}catch(e){
			console.log(e.message);
			resolve(e.message);
		}
	}); 

	return promise;
}

const main = function(id, request, callback){

	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'root',
		database : 'arcade_call',
		port:8889
	});

	connection.connect(function(err) { 
		if (err) throw err;

		connection.query('SELECT * FROM arcade_usuarios WHERE id='+ id, function (error, results){
			if (error){ 
				callback(error);	
			}else{	
				callback(results);
			};
		});
	});


}

