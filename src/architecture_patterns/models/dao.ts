/* Basic Data access object design pattern 
**
** Author: Fabrício Galende M. de Carvalho 
** install: npm install @types/pg 
*/

import { Client } from 'pg';


interface UserDAO{
    insert_user(name:string, cpf:string):any;
}



class UserDAOPG implements UserDAO{
    //Database configuration
    dbConfig:Object = {
        user: 'postgres',
        host: 'localhost',
        database: 'uml',
        password: 'root',
        port: 3309, // Replace by the port configured in your system
    }; 

    async insert_user(nome: string, cpf: string){        
        /* function to connect to database and    
        perform a simple query */
        const client = new Client(this.dbConfig);
        let data={'nome': nome, 'cpf':cpf};
        console.log(data); //debug only
         await client.connect();
         console.log('Database successfully connected.');
         // Executing a query 
         const insertQuery = 'INSERT INTO usuario(nome, cpf) VALUES ($1, $2)';
          client.query(insertQuery, [data.nome, data.cpf])
                .then(result => {
                    console.log('Data inserted successfully');                    
                })
                .catch(error => {
                    console.error('Error executing query', error);                    
                })
                .finally(() => {
                    console.log("connection closed");
                    client.end();                   
                });                            
                 
    }
}
export{
    UserDAO, UserDAOPG
}


