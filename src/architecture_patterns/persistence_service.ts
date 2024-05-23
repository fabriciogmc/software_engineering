/*
Basic Data Persistence Service
Autor: Fabrício G. M. de Carvalho, Ph.D
*/

/* Importing express framework */
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

/* Each application must be executed in different ports if they are
at the same machine. */
const port = 5002;

/* Persistence class models */
import {UserDAO, UserDAOPG} from "./models/dao";



/* Configuração para leitura de parâmetros em requisição do tipo post em form */
app.use(bodyParser.urlencoded({extended: false}));
/* Habilitação de requisições partindo de outras aplicações */
app.use(cors({
    oringin: '*',
    credentials: true
})); 

/* Service route creation . */
app.get('/persist', persistence_handler);
/* Server execution */
app.listen(port, listenHandler);


/* Request handlers: */
/* Persistence Service Handler */
async function persistence_handler(req:any, res:any){ 
    console.log("Persistence service request received"); //Only for debug
    let nome: string = req.query.nome;
    let cpf: string = req.query.cpf;
    let user_dao: UserDAO = new UserDAOPG();
    await user_dao.insert_user(nome, cpf);
    res.end("Data successfully inserted");     
}

function listenHandler(){
    console.log(`Listening port ${port}!`);
}