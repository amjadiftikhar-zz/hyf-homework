const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
const timeInMinutes = (travelInformation.destinationDistance / travelInformation.speed) *60;
function travelTime(){
    const hours = Math.floor(timeInMinutes/60);
    const minutes = Math.floor(timeInMinutes % 60);
    return `${hours} hours and ${minutes} minutes needed to travel ${travelInformation.destinationDistance}`;
}
console.log(travelTime()); // 8 hours and 38 minutes