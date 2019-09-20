const class07Students = [];
function addStudentToClass(studentName) {    
    if (typeof(studentName) == 'string' ) {        
    if (studentName == 'Queen' || class07Students.length < 6) {
        return class07Students.push(studentName);    
        } else if (class07Students.includes(studentName)) {
        return `student ${studentName} can't be added, no duplication allowed`;
    } else if (class07Students.length == 0) { 
        return 'Enter student name';
    } else if (class07Students.length < 6 ) {            
       return class07Students.push(studentName);        
        }
        else {
            return 'You cannot add further students in the class07.';
        }
    }
    else {
    return 'student name should be a string.';
    }
}
function getNumberOfStudents() {
    return class07Students.length;
    }

addStudentToClass('Peter');
addStudentToClass('Niels');
addStudentToClass('Jen');
addStudentToClass('Anna');
addStudentToClass('Mia');
addStudentToClass('Jensen');


console.log(addStudentToClass('Queen'));
console.log(getNumberOfStudents());
console.log(class07Students);