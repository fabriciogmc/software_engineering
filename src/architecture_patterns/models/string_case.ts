/* basic string capitalization class
**
**  Author: Fabrício G. M. de Carvalho, DSc
*/


class StringProcessor{
    capitalize(str_in: string): string{
        return str_in.toUpperCase();
    }
}

export{
    StringProcessor
}