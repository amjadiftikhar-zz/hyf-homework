const introArr = [];
const todoArr = [];
const eventArr = [];
const favDishArr = [];

function getReply(command){
    const commandArr = command.toLowerCase().split(' ');
    if(command.includes('hello my name is') && introArr.length === 0) {
        const commandArr = command.toLowerCase().split(' ');
        const firstName = commandArr[commandArr.length - 1];
        introArr.push(firstName);
        return `Nice to meet you ${firstName}`;
    } else if(command.includes('hello my name is') && introArr.length !== 0){
        return `I know your name`;
    } else if(command.includes(`what is my name`) && introArr.length !== 0){
        return `your name is ${introArr[introArr.length-1]}.`;
    } else if(command.includes(`what is my name`) && introArr.length == 0){
        return `I do not know your name`;
    }

    /*------------------Todo----------------------------*/

    else if(command.includes('to my todo')){
        const commandArr = command.split(' ');
        const itemTodoArr = commandArr.slice(1, -3);
        const todoContent = itemTodoArr.join(' ');
        todoArr.push(todoContent);
        return `${todoContent} added to your todo`;
    }
     else if(command === 'what is on my todo'){
        return todoArr;
    } 
   /*------------------Removing from Todo----------------------------*/ 

    else if(command.startsWith('remove')){
        const removeTodoArr = commandArr.slice(1, -3);
        todoArr.splice(removeTodoArr);
        return `removed ${removeTodoArr} from your todo`;
    }

    /*------------------date----------------------------*/ 
    else if(command.includes('today')){
    const today = new Date();
    const todayDate = today.getDate();
    const year = today.getFullYear();
    const currentDate = new Date().toLocaleString('en-us', {month:'long'});    
    return `Today is ${todayDate}. of ${currentDate} ${year}`;

    } 
/*------------------favourite dish----------------------------*/ 
    else if (command.includes('what is my favourite dish')) {
    return `your favourite dish is ${favDishArr[favDishArr.length - 1]}.`;
    }
    else if (command.includes('my favourite dish is')) {
    const commandArr = command.split(' ');
    const favouriteDishName = commandArr[commandArr.length-1];    
    favDishArr.push(favouriteDishName);
    return favouriteDishName;
  } 

  /*------------------timer----------------------------*/ 

  else if (command.includes('timer for 4 minutes')) {    
    const commandArr = command.split(' ');
    const timer = commandArr[commandArr.length-2];    
    const minInMilliSeconds = 0;
    setTimeout(() => {
    console.log('Timer done')}, minInMilliSeconds);
    return `Timer set for ${timer} minutes.`;
  }
}

console.log(getReply('hello my name is Amjad')); 
console.log(getReply('what is my name')); 
console.log(getReply('Add singing in the shower to my todo'));
console.log(getReply('add fishing to my todo'));
console.log(getReply('what is on my todo'));
console.log(getReply('remove fishing from my todo'));
console.log(getReply('what date is it today'));
console.log(getReply('my favourite dish is spaghetti'));
console.log(getReply('What is my favourite dish'));
console.log(getReply('Set a timer for 4 minutes'));
