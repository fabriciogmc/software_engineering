/*
* Some system models.
* Models are related to data used by application and also to
* business rules.
*
* Author: Fabrício G. M. de Carvalho, DSc.
*/


class DatabaseHandler{
    /* This class is a data model related to persistence. */
    constructor(pool){
        this.pool = pool;
    }
 
    insert_user(user_data){
        var validator = new Validator();  
        try {         
          if (validator.validate_data(user_data[1])){
            this.pool.query('INSERT INTO usuario (nome, cpf) VALUES ($1, $2)', [user_data[0], user_data[1]]);  
            console.log("User successfully created! ")
          } else {
            console.log("Invalid cpf.")
          }    
        } catch (err) {
          console.log("Database insertion error!");
          throw err;
        }
      }
      
}

class Validator{
    /* This class includes a business rule. In this case
    ** it is related to cpf numeric data type. 
    */
    validate_data(str_number){
        let number = parseInt(str_number);
        if(isNaN(number)){
          return false;
        } else {
          return true;
        } 
    }
}

exports.DatabaseHandler = DatabaseHandler;
exports.Validator = Validator;

