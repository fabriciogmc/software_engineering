/*
 Basic database application using postgresql
 Author: Fabrício G. M. de Carvalho

 Do not forget to install:
 npm install @types/prompt-sync
*/

const posgres = require('pg');

var prompt = require('prompt-sync')();

/* create a connection pool */
const pool = new posgres.Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'root',
  database: 'uml',
  port: 3309
});


var nome = prompt('Type the user name: ');
var cpf = prompt('Type the user cpf: ');


try {
  //let nome = 'Fabrício';
  //let cpf = '12345678901';
  pool.query('INSERT INTO usuario (nome, cpf) VALUES ($1, $2)', [nome, cpf]);  
  console.log("Usuário acrescentado com sucesso! ")
} catch (err) {
  console.log("Insertion error!");
	throw err;
}



 


