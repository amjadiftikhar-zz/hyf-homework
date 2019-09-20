
function getFullname(firstname, surname, useFormalName) {
    
if (firstname == ' ' || surname == ' ') {
        return 'Please write firstname and lastname';
    }
    else if(useFormalName) {
        return (`Lord ${firstname}, ${surname}`);
    }
     else {
         return (`${firstname}, ${surname}`);
     }
}

console.log(getFullname('Benjamin', 'Hughes', true))


