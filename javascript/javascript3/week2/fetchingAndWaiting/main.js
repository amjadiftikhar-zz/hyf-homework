// Only using promises

// 1. Fetch some data from an api.

const api = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
fetch(api)
    .then(response => response.json())    
    
// 2. After that data has been fetched, wait 3 seconds
// 3. Log out the data from the api

 .then(data => setTimeout(() => {
   console.log(data);
}, 3*1000));

// 4. Optional Now do all of these things using chaining

fetch(api)
    .then(response => response.json())
    .then(data =>
        setTimeout(() => {
            console.log(data)
        }, 5*1000)
    )
    
