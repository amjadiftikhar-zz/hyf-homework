const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
function getAverage(housePrices) {
    let sum = 0;
    for(let i=0; i<housePrices.length; i++) {
        sum += housePrices[i]; 
        // return sum     
    }
    // return sum;
    return `The average is: ${sum / housePrices.length}`;  
    }

    // console.log(getAverage(housePrices));

//    -------------------------------------------median-----------------------------------------------------------------------
    
    function median(housePrices){
    if(housePrices.length ===0) {
        return 0;
    }  
    housePrices.sort(function(x,y){
      return x-y;
    });  
    const halfPrice = Math.floor(housePrices.length / 2);  
    if (housePrices.length % 2) { 
        return `The median is: ${housePrices[halfPrice]}`;
    }    
}

// console.log(median(housePrices));

function averageMedianObj(housePrices){ 
const averageMedian = {average: getAverage(housePrices), 
median: median(housePrices)}
return averageMedian;
}

console.log(averageMedianObj(housePrices));

// #########################Render housePrices, average and median to the web####################

const header = document.createElement('h1');
document.body.appendChild(header);
header.textContent = 'Average and median of house prices';
const ul = document.createElement('ul');
ul.textContent = 'House Prices';
document.body.appendChild(ul);
housePrices.forEach(housePrices => {
    const li = document.createElement('li');
    li.textContent = housePrices;
    ul.appendChild(li);  
});
const p1 = document.createElement('p1');
p1.textContent = getAverage(housePrices);
document.body.appendChild(p1);
const p2 = document.createElement('p2');
p2.textContent = median(housePrices);
document.body.appendChild(p2);





