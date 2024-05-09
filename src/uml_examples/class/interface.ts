interface Calculator{
    sum(a:number[]):number;
}

class MyCalculadorFor implements Calculator{
    sum(a:number[]){
        let result:number = 0;
        for(let i=0; i<a.length; ++i){
            result += a[i];
        }
        return result;
    }
}

class MyCalculatorWhile implements Calculator{
    
    sum(b:number[]){
        let i:number=0;
        let result: number = 0;
        while(i<b.length ){
            result += b[i];
            ++i;
        }
        return result;
    }    

}

export{
    Calculator, MyCalculadorFor, MyCalculatorWhile
}