/*
 Basic database application using postgresql
 Author: Fabrício G. M. de Carvalho

 Do not forget to install:
 npm install @types/prompt-sync
*/
 import {Student} from './model';

 let student:Student = new Student('2024fatjac', 'digo', new Date('10/10/2000'));

 student.say_data();




 


