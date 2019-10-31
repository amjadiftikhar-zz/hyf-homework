// Edited.......

const movies = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
fetch(movies)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        const badMovies = data.filter(movie => movie.rating < 4);
            console.log(badMovies)
        const badMoviesSince2000 = badMovies.filter(movieLatest => movieLatest.year >= 2000);
            console.log(badMoviesSince2000);
        const badMoviesSince2000Title = badMoviesSince2000.map(badMoviesTitle => badMoviesTitle.title);
            console.log(badMoviesSince2000Title);
    })
    