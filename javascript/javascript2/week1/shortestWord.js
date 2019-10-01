const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
// console.log(danishWords);
function findShortestWord(danishWords){    
    shortestWord = danishWords.reduce(function(prev, next) {
    if (prev.length < next.length) {
        return prev;
    } else if (prev.length === next.length){
       return prev;
    } else {
       return next;
    }
  });
  return `The shortest word is: ${shortestWord}`;
}
console.log(findShortestWord(danishWords));