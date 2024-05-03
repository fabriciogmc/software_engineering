/*
 Basic database application using postgresql
 Author: Fabrício G. M. de Carvalho

 Do not forget to install:
 npm install @types/prompt-sync
*/

const posgres = require('pg');
const model = require('./model');

var prompt = require('prompt-sync')();

/* create a connection pool */
const pool = new posgres.Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'root',
  database: 'uml',
  port: 3309
});

function read_data(data){
  var name = prompt('Type the user name: ');
  var cpf = prompt('Type the user cpf: ');
  data.push(name);
  data.push(cpf);
  return data;
}

var my_user_data = new Array();

const my_database_handler = new model.DatabaseHandler(pool);

var user_data = read_data(my_user_data);

my_database_handler.insert_user(user_data);


 


