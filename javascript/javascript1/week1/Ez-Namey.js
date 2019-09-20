const firstWords = ["Genius", "Developer", "Talent", "Scientist", "Flexible", "Logic", "Organization", "Motivational", "Creative", "Script"];
const secondWords = ["Customer", "Teacher", "Artist", "Phases", "Cool", "Perfect", "Java", "Program", "Index", "Tool"];
const randomNumber0 = Math.floor(Math.random() * 10);
const randomNumber1 = Math.floor(Math.random() * 10);

const startupName = (firstWords[randomNumber0] + " " + secondWords[randomNumber1]);
console.log(`The startup: ${startupName} contains ${startupName.length} characters`);

const startUpUniqueName = firstWords.length * secondWords.length;
console.log(`Total unique names: ${startUpUniqueName}`); 

