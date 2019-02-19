'use strict';
const assert = require('assert');
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

		var usuario = request.query.user;
		var password= request.query.password;

		connection.query('SELECT password0 FROM arcade_usuarios WHERE id='+usuario, function (error, results) {
			if (error) throw error;

			console.log(password);
			console.log(results[0].password0);
			if( password == results[0].password0){
				response.data = 'si jalo';
			}else{
				response.data = 'no es la password';
			};

			callback(response);
		});
	});


	
}