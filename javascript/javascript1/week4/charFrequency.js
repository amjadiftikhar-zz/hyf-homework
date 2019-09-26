// const string = "happy";
characters = [];
function charFrequency(input) {
  const inputCharacters = input.split("");
  // input = inputCharacters.join("");
  // console.log(inputcharacters)  
  for(let i=0; i<input.length; i++) {    
    for(j=0; j<characters.length; j++){    
      if(characters[j].character === input[i]){
        characters[j].count += 1;        
      }      
    }    
    characters.push({character:input[i], count:1});    
  } 
  return characters;  
}
console.log(charFrequency("happy"));



