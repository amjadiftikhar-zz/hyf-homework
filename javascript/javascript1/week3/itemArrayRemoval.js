const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// Write some code here
// const index = names.indexOf('Ahmad');
// if (index > -1) {
//     names.splice(index, 1);
// }
for(var i = 0; i < names.length; i++) {
    if(names[i] == nameToRemove) {
       names.splice(i, 1);
    }
}

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']