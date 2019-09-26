function formatCreditCardNumber(number) {
    if(typeof number === "number"){
        const string = number.toString();
        const characters = string.split("");
        for(let i=4; i<characters.length; i+=5){
           characters.splice(i, 0, " ");
        }
        return characters.join("");
    }
}
const formattedCreditCardObject = formatCreditCardNumber(12345678901234);
console.log(formattedCreditCardObject);