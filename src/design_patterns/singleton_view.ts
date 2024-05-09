/*
Basic Singleton class usage example.

Fabrício Galende M. de Carvalho, DSc.

*/

import { MySingleton } from "./singleton";

let my_singleton = MySingleton.getInstance(100);
let my_singleton_2 = MySingleton.getInstance(101);
let my_singleton_3 = MySingleton.getInstance(102);


console.log(my_singleton.get_id());
console.log(my_singleton_2.get_id());
console.log(my_singleton_3.get_id());