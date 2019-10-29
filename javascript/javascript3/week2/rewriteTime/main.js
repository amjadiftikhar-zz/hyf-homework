// Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises. 
// So instead of using setTimeout and navigator.geolocation.getCurrentPosition with 
// callbacks, use it as a promise.

function setTimeoutPromise(setTime){
    const setTimePromise = new Promise(resolve => {
        setTimeout(resolve, setTime)   
    })
    return setTimePromise;
}
setTimeoutPromise(3000)
    .then(() => console.log('called after 3 seconds'))
    
    
    function getCurrentLocation(){
        const promise = new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
        return promise;
    }
    getCurrentLocation()
        .then(position => console.log(position))
        .catch(error => console.log(error))

    
    



    