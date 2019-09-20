//save a note

const notes = [];
function addNote(content, id) {
    notes.push({content, id})
}
addNote('First note', 1);
addNote('2nd note', 2);
addNote('3rd note', 3);
addNote('4th note', 4);
addNote('5th note', 5);

// console.log(notes);


// To see a specific notes.

function getNoteFromId(id) {
if(typeof (id) === 'number') { 
    for (let i = 0; i < notes.length; i++) {
        // if(id = notes[i].id) {
        //     return `${notes[i].content}`;
        // }
        const idNote = notes[i].id;
        if (idNote === id) {
        const content = notes[i].content;
        return content;
        }
    else{
        return 'ID does not exist';
    }
    }      
    
}
}
// console.log(getNoteFromId(1));

function getAllNotes() {
    return notes;
}
// console.log(getAllNotes());

function logOutNotesFormatted() {    
    for(let i = 0; i < notes.length; i++){
        return `The note with ID:${notes[i].id} 
        has the following note:${notes[i].content}.`;        
    }     
}
console.log(logOutNotesFormatted());




