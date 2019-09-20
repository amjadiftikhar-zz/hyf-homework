// const boughtCandyPrices = [];
// // const amountToSpend = Math.random() * 100;
// function addCandy(candyType, weight){
//     boughtCandyPrices.push(candyType)

//     // const candyType = ['Sweet', 'Chocolate', 'Toffee', 'Chewing-gum'];
//     // const price = [0.5,  0.7, 1.1, 0.03];

//     // boughtCandyPrices.push=(weight*CandyPrice);
//     // if (candyType == 'Sweet' ) {
//     //     boughtCandyPrices.push(0.5 * weight);
//     //     return;
//     // } else if (candyType == 'Chocolate') {
//     //     boughtCandyPrices.push(0.7 * weight);
//     //     return;
//     // } else if (candyType == 'Toffee') {
//     //     boughtCandyPrices.push(1.1 * weight);
//     //     return;
//     // } else if (candyType == 'Chewing-gum') {
//     //     boughtCandyPrices.push(0.03 * weight);
//     //     return;
//     // } 
// }

// function canBuyMoreCandy() {


// }

const class07Students = [];
	function addStudentToClass(studentName) {
	
	if (class07Students.length <= 6 || studentName === "Queen"){
	return class07Students.push(studentName);
	}

	else if(class07Students.length <6){
	return "Please Enter more students"
	}
	
	else if( class07Students.length === 6 && studentName !== "Queen"){
		return "No more students can be added to class 07"
	}

	else if (class07Students.includes(studentName)){
		return "student ${studentName} exists already"
	}

		
}


addStudentToClass("Anders");
addStudentToClass("Heidi");
addStudentToClass("Kamran");
addStudentToClass("Touseef");
addStudentToClass("Najmi");
addStudentToClass("Gitte");
addStudentToClass("Queen");

// console.log(class07Students);
// console.log(class07Students.length);
console.log(addStudentToClass('Queen'));
console.log(getNumberOfStudents());
