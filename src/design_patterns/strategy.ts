/* Basic strategy design pattern examples
**
** Author: Fabrício Galende M. de Carvalho
**
*/

interface Calculator{
    cube(a:number):number;
}

class CalculatorBasic implements Calculator{
    cube(a: number): number{
        return a*a*a;
    }
}

class CalculatorLib implements Calculator{
    cube(a: number): number{
        return Math.pow(a,3);
    }
}

export {
    Calculator, CalculatorBasic, CalculatorLib
}