// Create an array with 3 items. All items should be functions. Iterate through the array and 
// call all the functions.

let arrOfFunctions = [function add(a, b){
    return a + b; 
}, 
function multiply(a, b){
    return a * b; 
},
function subtract(a, b){
    return a - b; 
},
function divide(a, b){
    return a / b; 
}]; 

for(i=0; i<arrOfFunctions.length; i++){
    console.log(arrOfFunctions[i](3, 4));   // 7, 12, -1, 0.75. 
}

//Create a function as a const and try creating a function normally. Call both functions.

function tryFunction() {
    console.log('Here is a try Function');    
} 

const constFunction = function(){
    console.log('Here is a const Function');
}

// tryFunction();
// constFunction();

function callBothFunc(callback){
    return callback();
}
callBothFunc(tryFunction);
callBothFunc(constFunction);

//Create an object that has a key whose value is a function. Try calling this function.

const objectOfFunction = {
    tryKey: function thisFunction() {
        console.log('Here is a THIS Function');    
        }, 
    helloKey: function helloFunction
    () {
        console.log('Here is a HELLO Function');        
        }, 
    constKey: function thatFunction() {
        console.log('Here is a THAT Function');
        }
    };

Object.keys(objectOfFunction).forEach(key => objectOfFunction[key]());

//keys

// const keys = Object.keys(objectOfFunction);
// console.log(keys);


    


