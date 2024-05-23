/*
Basic string capitalization service
Autor: Fabrício G. M. de Carvalho, Ph.D
*/

/* Importing express framework */
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

/* Each application must be executed in different ports if they are
at the same machine. */
const port = 5001;

/* Model import */
import {StringProcessor} from "./models/string_case";



/* Configuração para leitura de parâmetros em requisição do tipo post em form */
app.use(bodyParser.urlencoded({extended: false}));
/* Habilitação de requisições partindo de outras aplicações */
app.use(cors({
    oringin: '*',
    credentials: true
})); 

/* Service route creation . */
app.get('/capitalize', capitalize_handler);
/* Server execution */
app.listen(port, listenHandler);


/* Request handlers: */
/* Capitalization service handler */
async function capitalize_handler(req:any, res:any){ 
    console.log("Capitalization request received"); //Only for debug
    let string_processor: StringProcessor = new StringProcessor();
    let str_input: string = req.query.str_in;
    let str_output: String = string_processor.capitalize(str_input);
    let str_output_json:Object = {'str_out': str_output};
    str_output_json = JSON.stringify(str_output_json);
    res.setHeader('Content-Type', 'application/json');
    res.end(str_output_json);     
}

function listenHandler(){
    console.log(`Listening port ${port}!`);
}