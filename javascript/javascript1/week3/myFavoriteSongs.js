const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlayList = [];
function addSongToDatabase(song){
  songDatabase.push(song);
}
addSongToDatabase({
  songId: 5,
  title: 'truth',
  artist: 'Clinton',
});
addSongToDatabase({
  songId: 6,
  title: 'Definite',
  artist: 'Penther',
});
// console.log(songDatabase);


// search for a song

function getSongByTitle(title){
  for(i=0; i<songDatabase.length; i++){
    const key = songDatabase[i].title;
    if (key == title) {
      return songDatabase[i];
    }
    
  }
}

// const searchedSong = getSongByTitle('When is enough too little?');
// console.log(searchedSong); // returns { songId: 4, title: 'When is enough too little', artist: 'The spies girls'}
// // const searchedSong2 = getSongByTitle('When is enough too');
// // console.log(searchedSong); // returns undefined


function addSongToMyPlayList(title) {
  const song = getSongByTitle(title);
  myPlayList.push(song)
}
addSongToMyPlayList('3 nails in wood');
addSongToMyPlayList('Definite')
console.log(myPlayList);
