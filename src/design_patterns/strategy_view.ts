/* Basic strategy design pattern examples
**
** Author: Fabrício Galende M. de Carvalho
**
*/

import { Calculator, CalculatorBasic, CalculatorLib } from "./strategy";

let my_calculator: Calculator = new CalculatorBasic();
console.log(my_calculator.cube(3));

/* Internal implementation changes but
same interface remains and also the 
output, in this case. */

my_calculator = new CalculatorLib();
console.log(my_calculator.cube(3));





