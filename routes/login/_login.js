'use strict';
const assert = require('assert');
const jwt = require('jsonwebtoken')
const collectionName = 'Users';
const mysql = require('mysql');
var response = { data: '', totalRecords: 0 };


module.exports.handler = function(request, h){
	const promise = new Promise((resolve, reject) => {
		try{
			main(request, function(response){ 
				resolve(response) 
			});
		}catch(e){
			console.log(e.message)
			response.data = e.message;
			resolve(response);
		}
	}); 

	return promise;
}

const main = function(request, callback){

	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'root',
		database : 'arcade_call',
		port:8889
	});

	connection.connect(function(err) { 
		if (err) throw err;
		console.log("Connected!");

		const usuario = request.query.user;
		const password= request.query.password;

		connection.query('SELECT password0 FROM arcade_usuarios WHERE id='+usuario, function (error, results) {
			if (error){ 
				response.data = err;	
			}else{
				if( password == results[0].password0){
					var token = jwt.sign({ id: usuario }, 'secret', {
						expiresIn: 86400 // 24 hours
					});
					
					response.data = token;
					response.totalRecords = 1;
				}else{
					response.data = 'No Match';
					response.totalRecords = 1;
				};

			}

			

			callback(response);
		});
	});


	
}