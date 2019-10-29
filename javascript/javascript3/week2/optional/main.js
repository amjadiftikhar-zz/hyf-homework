












// function fetchJSON(url) {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open('GET', url);
//       xhr.responseType = 'json';
//       xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4) {
//           if (xhr.status < 400) {
//             resolve(xhr.response);
//           } else {
//             reject(new Error(xhr.statusText));
//           }
//         }
//       };
//       xhr.send();
//     });
// }  
// console.log(fetchJSON('http://api.nobelprize.org/v1/laureate.json?gender=female'))

//   and alternative of this is,

// const url = 'http://api.nobelprize.org/v1/laureate.json?gender=female';

// const fetchJSON = url => fetch(url)
//                             .then(res => res.json())
//                             // console.log('hello')
//                             .then(data => console.log(data))
//                             .catch(error => console.log('not found'))


//  const url = 'http://api.nobelprize.org/v1/laureate.json?gender=female';

//  fetchJSON(url)
//     .then(data => renderData(data))
//     .catch(err => renderError(err));

 
// function renderData(data){
//     console.log(data);
// }
// function renderError(err){
//     console.error(err.message);
// }
    
// Promise.reject(new Error('oops'))
//   .catch(err => console.log(err.message));

// console.log('after promise');

// function fetchAndRender(url, otherUrl) {
//     fetchJSON(url)
       
//       .then(data => {
//           console.log(data)
//         renderData(data);
//         return fetchJSON(otherUrl);
//       })
//       .then(otherData => {
//         renderOtherData(otherData);
//       })
//       .catch(err => {
//         renderError(err);
//       });
// }
  
// fetchAndRender();// Exercise 1
//     1. Lets use some promises: fetch yes or no from this api: https://yesno.wtf/api. log out the answer
//     2. Get your battery level and if it is charging or not using navigator.getBattery() - use chrome browser

// const api = 'https://yesno.wtf/api';
// const promise = new Promise((resolved, reject) => {
//     setTimeout(() => {
//         resolved('hello')        
//     }, 4*100);
    
// })
// console.log(promise);

// 2. Getting the battery level

navigator
.getBattery()
.then(data => {
console.log(data.level);    
})

// Exercise 2
// 1. Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' after 4 seconds
const promise1 = new Promise((resolved, reject) => {
setTimeout(() => {
    resolved('hello')               
}, 20*1000);

})
// .then(value => console.log(value))
console.log(promise1);
// 2. Create a promise that resolves with a string (you decide what the string should say) after 2 seconds.
const promise2 = new Promise((resolved, reject) => {
setTimeout(() => {
    resolved('hello, here is the string')               
}, 2*1000);

})
.then(value => console.log(value))
console.log(promise2);
// 3. Use the promise: When the promise is resolved console.log that string
const promise3 = new Promise((resolve, reject) => {
resolve('display this string when resolve it')
})
.then(value => console.log(value));

// 4. Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message
// to the console
function rejectPromiseFnc(condApply){ 
const promise4 = new Promise(function(resolve, reject) {
setTimeout(() => {
if(condApply){
    // console.log('condition succeeded')
    return resolve('I am done with this exercise')
} else {
    // console.log('condition failed')
    return reject('I am failed to do this exercise')
}    
}, 5*1000);
})
return promise4;
}
rejectPromiseFnc(false)
.then(value => console.log(value))
.catch(error => console.log(error))
console.log(rejectPromiseFnc(true))