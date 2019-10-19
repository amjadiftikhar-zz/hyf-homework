//1. Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout( () => {
    console.log('Called after 2.5 seconds');
}, 2.5 * 1000);

//2. Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log
//  out the stringToLog after delay seconds. Call the function you have created with some different arguments.

function logTest(delay, stringToLog){   
   setTimeout(() => {
        console.log(stringToLog);
    }, delay*1000);  
}
logTest(2, 'This string logged after 2 Seconds');
logTest(3, 'This string logged after 3 Seconds');

//3. Create a button in html. When clicking this button, use the function you created in the previous task to
//  log out the text: Called after 5 seconds 5 seconds 
// after the button is clicked.


document.getElementById('clickButton').addEventListener('click', function(){
    // setTimeout(() => {
    return  logTest(5, 'This string logged after 5 Seconds');     
});

//4. Create two functions and assign them to two different variables. One function logs out Earth, the other
// function logs out Saturn. Now create a new third function that has one parameter: planetLogFunction. 
//The only thing the third function should do is call the provided parameter function. Try call the third 
//function once with the Earth function and once with the Saturn function.

function earthLogger(){
    console.log('Earth');

}
// earthLogger('Earth');

function saturnLogger(){
    console.log('Saturn');
}
// saturnLogger('Saturn');

function planetLogFunction(callback){
    return callback();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

document.getElementById('callbackButton').addEventListener('click', function(){    
    setTimeout(() => {
    return planetLogFunction(earthLogger);
    }, 5*1000)
});

document.getElementById('callbackButtonB').addEventListener('click', function(){ 
    setTimeout(() => {
        return planetLogFunction(saturnLogger);
    }, 5*1000)   
});

//5. Create a button with the text called "Log location". When this button is clicked the 
// location (latitude, longitude) of the user should be logged out

let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");

document.getElementById('logLocation').addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let latPosition = position.coords.latitude;
    let longPosition = position.coords.longitude;

    latText.innerText = latPosition.toFixed(2);
    longText.innerText = longPosition.toFixed(2);
  });
});

// navigator.geolocation.getCurrentPosition(function(position) {
//     do_something(position.coords.latitude, position.coords.longitude);
//   });

//7 =>  Create a function called runAfterDelay. It has two parameters: delay and callback. 
// When called the function should wait delay seconds and then call the provided callback function. 
// Try and call this function with different delays and different callback functions


function runAfterDelay(delay, callback){
    setTimeout(() => {        
       callback();
    }, delay*1000);    
}
runAfterDelay(4, function(){
    console.log('should be delayed by 4 seconds');
});

runAfterDelay(10, function(){
    console.log('should be delayed by 10 seconds');
});

//8 => Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds. 
// If a double click has been detected, log out the text: "double click!"

document.addEventListener('dblclick', function(){
    document.body.innerHTML= 'double clicked';
});

//9 => Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, 
// logFunnyJoke - function and logBadJoke - function. If you set tellFunnyJoke to true it should call 
// the logFunnyJoke function that should log out a funny joke. And vice versa.

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke){
    if(shouldTellFunnyJoke === true){
        return logFunnyJoke();
    } else {
        return logBadJoke();
    }    

    function logFunnyJoke(){
        console.log('funny jokes');
    
    }

    function logBadJoke(){
        console.log('bad jokes');

    }
}
jokeCreator(true);
jokeCreator(false)






