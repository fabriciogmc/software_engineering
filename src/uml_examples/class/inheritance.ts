/* Examples of class definition and inheritance */

class User{
    name: string;
    date_of_birth: Date;

    constructor(name:string, date_of_birth: Date){
        this.date_of_birth = date_of_birth;
        this.name = name;
    }

    say_name(){
        console.log("my name is: ", this.name);
    }
    
}

class Student extends User{
    ra: string;
    constructor(ra: string, name: string, date_of_birth: Date){
        super(name,date_of_birth);
        this.ra = ra;
    }

    say_data(){
        this.say_name();
        console.log("my ra is: ", this.ra);
        console.log("my date of bith is: ", this.date_of_birth.toLocaleDateString());
    }
}



export{
    User, Student
}