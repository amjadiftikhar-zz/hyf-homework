
function numbers(x, y, z) {
    // const n = 100;
    for(let i=1; i<=z; i++){ 
        if((i % x == 0) && (i % y == 0)){
            console.log("fizzbuzz");
        } else if(i % x == 0 ) {
            console.log("fizz") 
        } else if (i % y == 0) {
            console.log("buzz");
        }else{
            console.log(i);
        }
    }
}
(numbers(4, 12, 100));
        

