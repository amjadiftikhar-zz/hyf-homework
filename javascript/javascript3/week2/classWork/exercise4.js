// Exercise 4
// 1. Get battery level

navigator
    .getBattery()
    .then(data => console.log(data.level)); 

navigator
    .storage
    .estimate()
    .then(data => console.log(data.usage))
// 2. After the battery level has been gotten, fetch the movies
fetch('http://api.nobelprize.org/v1/laureate.json?gender=female')
    .then(response => response.json())
    .then(data => console.log(data))
    // .then(laureates => console.log(laureates[3].firstname));
// 3. Log out the movies from this api
fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
.then(data => data.json())
.then(movies => console.log(movies))
//     {
// const movieTitles = movies.map(movie => movie.title);
// console.log(movieTitles);
//  })   
// 4. Use chaining

const batteryPromise = navigator.getBattery();
const moviePromise = fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
);

Promise.all([batteryPromise, moviePromise]).then(data => {
    const batteryLevel = data[0].level;
    const movieData = data[1].json();
    console.log(batteryLevel);
    console.log(movieData);
})
// .then(value => console.log(value))
//         .then(error => console.log(error))
