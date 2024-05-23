/* Basic DAO usage example 
**
**
** Author: Fabrício Galende M. de Carvalho.
*/

import{UserDAO, UserDAOPG} from './dao'
import { UserDAOMongoDB } from './dao';

let my_userDAO: UserDAO = new UserDAOMongoDB();

let users: string[] = [];
async function find(){
    let user_list = await my_userDAO.listUser(users);
    console.log(user_list);
    console.log(".... Results from any type of database. Implementation is not important. ");
}

find();


