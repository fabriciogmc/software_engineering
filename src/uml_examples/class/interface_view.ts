/*
Basic interface implementation view example.

Fabrício Galende M. de Carvalho, DSc.

*/

import { Calculator } from "./interface"; //Basic interface
import { MyCalculadorFor, MyCalculatorWhile } from "./interface"; //distinct implementations.

//let my_calculator:  Calculator = new MyCalculadorFor();
 let my_calculator: Calculator = new MyCalculatorWhile();
console.log(my_calculator.sum([1, 2, 3, 4]));