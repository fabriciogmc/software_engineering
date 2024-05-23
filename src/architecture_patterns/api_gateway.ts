/*
Basic API gateway service
Autor: Fabrício G. M. de Carvalho, Ph.D
*/

const express = require('express');
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

var cors = require('cors');
const app = express();

/* Em uma mesma máquina, aplicações web diferentes devem ser executadas
em portas diferentes.*/
const port = 5000;

/* Basic service endpoints: */
//const capitalization_service_endpoint: string = 'http://localhost:5001/capitalize';
//const persistence_service_endpoint: string = 'http://localhost:5002/persistence'

/* Configuração para leitura de parâmetros em requisição do tipo post em form */
app.use(bodyParser.urlencoded({extended: false}));
/* Habilitação de requisições partindo de outras aplicações */
app.use(cors({
    oringin: '*',
    credentials: true
})); 


let capitalization_service_target: string = 'http://localhost:5001/capitalize';

// Define a proxy middleware for '/capitalization' 
// and persistence requests
  
const capitalization_target = 'http://localhost:5001/capitalize'; // capitalization service
const persistence_target = 'http://localhost:5002/persist';

// Create a proxy middleware with the target option specified
const capitalization_proxy = createProxyMiddleware({
  target: capitalization_target,
  changeOrigin: true, // Required for virtual hosted sites
  pathRewrite: { '^/capitalization': '' }
});

const persistence_proxy = createProxyMiddleware({
    target: persistence_target,
    changeOrigin: true, // Required for virtual hosted sites
    pathRewrite: { '^/persistence': '' }
  });
  

// Use the proxy middleware for all requests
app.use('/capitalization', capitalization_proxy); 
app.use('/persistence', persistence_proxy); 
/* Server execution */
app.listen(port, listenHandler);

function listenHandler(){
    console.log(`Listening port ${port}!`);
}