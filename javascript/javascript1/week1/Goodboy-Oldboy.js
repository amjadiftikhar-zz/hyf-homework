const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const humanYear = dogYearFuture - dogYearOfBirth;
const dogYear = (dogYearFuture - dogYearOfBirth)*7;

const shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
}
else {
    console.log(`Your dog will be ${humanYear} human years old in ${dogYearFuture}`);
}


