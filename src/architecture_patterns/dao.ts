/* Basic Data access object design pattern 
**
** Author: Fabrício Galende M. de Carvalho 
** install: npm install @types/pg 
*/

import { Client } from 'pg';
import { MongoClient, Db } from 'mongodb';

interface UserDAO{
    listUser(users: string[]):any;
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

    async listUser(users: string[]){        
        /* function to connect to database and
        perform a simple query */
        const client = new Client(this.dbConfig);
        try {
            await client.connect();
            console.log('Database successfully connected.');
            // Executing a query 
            const result = await client.query('select * from usuario');
            for(let i=0; i< result.rows.length; ++i){
                users.push(result.rows[i].nome);
            }                    
            } catch (err) {
            console.error('Database connection error:', err);
            } finally {
                client.end(); // Closes database connection.
            }     
        return users;
    }

}

class UserDAOMongoDB implements UserDAO{   
    url:string = 'mongodb://localhost:27017'; //database connection url
    dbName:string = 'uml'; //database name
 
    async listUser(users: string[]){
    
        let client: MongoClient | null = null;

            try {
            // Conectar ao servidor MongoDB
            client = await MongoClient.connect(this.url);

            console.log('Database MongoDB successfully connected. '); 
            const db: Db = client.db(this.dbName);
            const collection = db.collection('users');

            // List all the users in collection

            const query = { /* your query criteria */ };
            const options = { /* optional: projection, sort, limit, etc. */ };
            const cursor = await collection.find(query, options);            
            const documents = await cursor.toArray();
            for(let i=0; i<documents.length; ++i){
                users.push(documents[i].nome);
            }            
        } catch (err) {
            console.error('Database connection error', err);
        } finally {
            if (client) {
            await client.close(); // Closes the connection
            console.log('Mongodb database connection closed');
            }
        }
        return users;
    }//list

}

export{
    UserDAO, UserDAOPG, UserDAOMongoDB
}


