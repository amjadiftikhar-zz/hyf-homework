// const movies = [{"title": "'71","year": 2014,"rating": 7.2,"votes": 41702,"running_times": 5940},
// {"title": "'A' gai wak","year": 1983,"rating": 7.4,"votes": 11942,"running_times": 6300},
// {"title": "'Breaker' Morant","year": 1980,"rating": 7.9,"votes": 10702,"running_times": 6420},
// {"title": "'Crocodile' Dundee II","year": 1988,"rating": 5.5,"votes": 47180,"running_times": 6480},
// {"title": "(500) Days of Summer","year": 2009,"rating": 7.7,"votes": 412368,"running_times": 5700},
// {"title": "*batteries not included","year": 1987,"rating": 6.6,"votes": 25636,"running_times": 6360},
// {"title": "...E tu vivrai nel terrore! L'aldilà","year": 1981,"rating": 6.9,"votes": 16484,"running_times": 5220},
// {"title": "...and justice for all.","year": 1979,"rating": 7.4,"votes": 25408,"running_times": 7140},
// {"title": "10","year": 1979,"rating": 6,"votes": 13152,"running_times": 7320}
// ];

//movies with short titles

const shortTitle = movies.filter(movieWithShortTitle => movieWithShortTitle.title.length <= 4);
console.log(shortTitle);

//movies with long titles

const longTitle = movies.filter(movieWithLongTitle => movieWithLongTitle.title.length >= 25 );   
console.log(longTitle);

//movies made between 1980-1989

const moviesYear = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989 ); 
console.log(moviesYear);

// creating new array with a key called tag  Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const moviesWithTag = movies.map(movieTagKey => {
if(movieTagKey.rating >= 7){    
    movieTagKey.tag = 'Good'
} else if(movieTagKey.tag >= 4){    
    movieTagKey.tag = 'Average' 
}else {
    movieTagKey.tag = 'Bad' 
} 
    return movies;
});        

console.log(moviesWithTag);

// 5. the movies rated higher than 6.

// const moviesWithHigherRating = movies.filter(highRating => highRating.rating > 6);
// console.log(moviesWithHigherRating);

// const moviesOnlyWithRating = movies.map(onlyRating => onlyRating.rating)
// console.log(moviesOnlyWithRating);

const highRatedmovies = movies
            .filter(highRating => highRating.rating > 6)
            .map(onlyRating => onlyRating.rating)
console.log(highRatedmovies); // [ 7.2, 7.4, 7.9, 7.7, 6.6, 6.9, 7.4 ]

//6. search the keywords, Surfer, Alien or Benjamin

const moviesWithKeyWords = movies.filter(movie => 
    movie.title.includes('Surfer') ||
    movie.title.includes('Alien') ||
    movie.title.includes('Benjamin') ||
    movie.title.includes('gai') 
   );
console.log(moviesWithKeyWords.length) // 1

// 7. array of movies with duplicated titles.

const duplicatedTitles = [];
movies
    .map(movie => movie.title.split(' '))
    .forEach(title => title.filter((word, index) => {
        if(title.indexOf(word) != index){
            duplicatedTitles.push(title.join(' '))
        }         
    }));

console.log(duplicatedTitles);

// 9.Calculate the average rating of all the movies using reduce. Optional

const averageRating = movies.reduce((sum, movie)  => sum + movie.rating, 0) / movies.length;
console.log(averageRating) //6.6









