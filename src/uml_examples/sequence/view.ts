/*
 Basic class diagram examples.
 Author: Fabrício G. M. de Carvalho

*/

import { Prompt } from "prompt-sync";
import { Validator } from "./model";
var p= require('prompt-sync')();



class Reader{
    read_name(p:Prompt, validator:Validator){
        var name = p('Type your name? ');
        if(validator.validate_string(name)){
            return name;
        } else {
            return "Invalid name!";
        }
                
    }
}

let reader = new Reader();
let validator = new Validator();
let name: string = reader.read_name(p, validator);
console.log("Your name is: ", name);





 


