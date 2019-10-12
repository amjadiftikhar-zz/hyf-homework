let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i=0; i<numbers.length; i++){
    if (numbers[i] % 2 !== 0) {
    newNumbers[i] = numbers[i] * 2;  
         
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

// map() method

const resultArr = [];
const oddDoubleNum = numbers.map(oddNum => {     
    if (oddNum % 2 !== 0){
    //     return oddNum * 2;
    // } else {
    //     return 0;
    resultArr.push(oddNum * 2);
    }
});

console.log(resultArr); // [ 2, 6]

//filter() method
const requiredNumArr = [];
const filteredNum = numbers.filter(filterNum => {     
    if (filterNum % 2 !== 0){        
        requiredNumArr.push(filterNum * 2);
    } 
});

console.log(requiredNumArr); //[ 2, 6 ]


