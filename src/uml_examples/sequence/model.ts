/* Examples of class definition and inheritance */

class Validator {

    validate_string(my_string: string){
        // return false if my_string contains any number
        const regex = /\d/;
        return !regex.test(my_string);
    }
}






export{
    Validator
}