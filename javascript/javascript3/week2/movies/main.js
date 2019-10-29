const movies = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';
fetch(movies)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        let badMovies = data.filter(movie => movie.rating < 4);
            console.log(badMovies)
            return badMovies;
    })
    .then(badMovies => {
        let badMoviesSince2000 = badMovies.filter(movieLatest => movieLatest.year >= 2000);
        console.log(badMoviesSince2000);
        return badMoviesSince2000;
    })
    .then(data => {
        let badMoviesSince2000Title = data.map(badMoviesTitle => badMoviesTitle.title);
        console.log(badMoviesSince2000Title);
        return badMoviesSince2000Title;
    })

    