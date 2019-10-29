// 1. Create a function that has one parameter: resolveAfter. Calling this function will return a promise that resolves after the resolveAfter seconds has passed.
// const promise = new Promise((resolvAfter) => {
//     setTimeout(() => {
//         resolvAfter()
//     }, 2*1000);
// })
// .then(value => console.log('resolves after resolveAfter seconds'))
// console.log(promise)


// 2. Here is an example: makeUpYourOwnFunctionName(3) will return a promise that resolves after 3 seconds.

function makeUpYourOwnFunctionName(resolvAfter){
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, resolvAfter*1000);
    })
    return promise;
}
console.log(makeUpYourOwnFunctionName(3))


// 3. Use the makeUpYourOwnFunctionName to log out the string I am called asynchronously after 6 seconds.

function makeUpYourOwnFunctionNameFnc(resolvAfterSec){
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, resolvAfterSec*1000);
    })
    .then(value => console.log('I am called asynchronously after 6 seconds'))
return promise;
}
console.log(makeUpYourOwnFunctionNameFnc(6))