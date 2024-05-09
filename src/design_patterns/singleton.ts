

class MySingleton
{
    private static instance: MySingleton = {} as MySingleton;
    private id:number;

    private constructor(id: number) {
        this.id = id;
    }

    static getInstance(id:number){
        if (Object.keys(MySingleton.instance).length== 0){ // There is no instance of object
            MySingleton.instance = new MySingleton(id);        
            console.log("constructor call!");    
        } 
        return MySingleton.instance;    
    }
    get_id(){
        return this.id;
    }
}

export{
    MySingleton
}