/*
Basic client app example.
Author: Fabrício G. M. de Carvalho, DSc.
*/

/* express web framework */
const express = require('express')

/* component to read body requests from forms */
const bodyParser = require('body-parser');

/* module to generate requests to service gateway */
var axios = require('axios');
import { AxiosResponse, AxiosError } from "axios";

const app = express();
const port = 5003;



/* Template engine configuration */
app.set('view engine', 'ejs');
app.set('views', './views'); //This reference is from the execution point

/* Configuration to read post request parameters */
app.use(bodyParser.urlencoded({extended: false}));


/* Static files directory configuration .*/
app.use(express.static('src/public'));

//app.get('/addForm', addProjectHandlerForm);

app.post('/capitalize', capitalize_text_handler);
app.post('/persist', persist_name_handler);
app.get('/', root_client_handler);
app.get('/persist_form', persist_client_handler);
app.listen(port, listenHandler);

/* Function to return text capitalization interface */
function root_client_handler(req:any,res:any){
    res.render('text_capitalization.ejs'); 
}

/* Function to return text persistence interface */
function persist_client_handler(req:any,res:any){
    res.render('database_insertion.ejs'); 
}

/* function to perform text capitalization through web service */
async function capitalize_text_handler(req:any,res:any){
    let input_text = req.body.text_input;
    console.log(input_text);
    let url = 'http://localhost:5000/capitalization?str_in='+input_text;
    axios.get(url)
            .then((response: AxiosResponse) => {
                res.render('response.ejs', {service_response: response.data.str_out})
                // Handle successful response
                console.log('Response status:', response.status);
                console.log('Response data:', response.data);
            })
            .catch((error: AxiosError) => {
                // Handle error
                if (error.response) {
                // Server responded with some error status code
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
                } else if (error.request) {
                // no response was sent
                console.error('Request:', error.request);
                } else {
                // Some processing error
                console.error('Error:', error.message);
                }
            });   
    
}

/* function to perform text capitalization through web service */
async function persist_name_handler(req:any,res:any){
    let name = req.body.name;
    let cpf = req.body.cpf;
    console.log(name);
    console.log(cpf);
    let url = 'http://localhost:5000/persistence?nome='+name+'&cpf='+cpf;
    axios.get(url)
            .then((response: AxiosResponse) => {
                res.render('response.ejs', {service_response: response.data})
                // Handle successful response
                console.log('Response status:', response.status);
                console.log('Response data:', response.data);
            })
            .catch((error: AxiosError) => {
                // Handle error
                if (error.response) {
                // Server responded with some error status code
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
                } else if (error.request) {
                // no response was sent
                console.error('Request:', error.request);
                } else {
                // Some processing error
                console.error('Error:', error.message);
                }
            });   
    
}



/* Tratador para inicializar a aplicação (escutar as requisições)*/
function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}

export{}