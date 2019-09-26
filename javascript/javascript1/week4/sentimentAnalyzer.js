const positiveList = ["good", "happy", "awesome", "excellant", "pleasant", "absolutely", "accepted", "acclaimed",       
                    "affirmative", "agreeable", "amazing", "approve", "aptitude", "attractive", "bounty", "brave",
                    "bravo", "brilliant", "bubbly", "cool", "courageous","creative", "cute"
                ];
const negativeList = ["aggressive", "aloof", "arrogant", "belligerent", "bitchy", "boring","careless",
                    "changeable", "compulsive", "conservative", "cowardly", "cruel", "cunning", "foolish",
                    "foolhardy","fussy", "greedy", "harsh","impatient", "impolite", "impulsive",
                    "inconsiderate", "inconsistent", "indecisive","inflexible", "irresponsible",
                    "jealous", "lazy","mean", "miserly", "moody", "narrow-minded", "nasty","naughty",
                    "nervous", "obsessive", "obstinate", "overcritical","overemotional", "possessive",
                    "quarrelsome", "quick-tempered", "rude", "ruthless", "sarcastic", "silly","sneaky",
                    "stupid", "superficial","unkind","unpredictable", "unreliable", "vulgar", "weak-willed"
                ];
function getSentiment(string) {
  let stringEntered =  string.toLowerCase().split(' ');   

  let positiveWords = [];
  let negativeWords = [];
  let score = 0;

    stringEntered.forEach(function(item){
        positiveList.forEach(function(elem){
        if(item === elem){positiveWords.push(item);}
        }); 
    });    
    stringEntered.forEach(function(item){
        negativeList.forEach(function(elem){
        if(item === elem){negativeWords.push(item);}
        });
    });
    score = positiveWords.length + negativeWords.length;
    return {
        score: score,
        positiveWords: positiveWords,
        negativeWords: negativeWords
      };
    }
const sentimentScoreObject = getSentiment('I am mega super amazing approve aptitude attractive awesome happy but a bit lazy mean jealous');
console.log(sentimentScoreObject); 
