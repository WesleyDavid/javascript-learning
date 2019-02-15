let number = 33  
let food = 'problem'
let addendum = "Or maybe more"

function process_string (strings, ...vals) {  
    let new_string = '';
    strings.forEach ( (string, i) => {
        let thisVal = vals[i];
        console.log(thisVal)
        if (thisVal !== undefined){
            new_string += string + thisVal;
        } else {
            new_string += string;
        }
    } )
    //`${clean_strings[0]}${value1}${clean_strings[1]}${value2}`

    return `${new_string}. Doncha know?`    
}

console.log(process_string`I have ${ number * 3 } ${ food + 's' }. ${addendum}`);