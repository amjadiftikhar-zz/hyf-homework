
const volumeInMeters = [8*10*10, 5*11*8];
const gardenSizeInM2 = [100, 70];
houseCost = [2500000, 1000000];
houseVolume = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300, volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;

if (houseVolume < houseCost[0]) {
    console.log("Peter's house is expensive than the real value.");
}
else {
    console.log("Peter's house price looks great");
}
if (houseVolume < houseCost[1]) {
    console.log("Julia's house is expensive than the real value.");
}
else {
    console.log("Julia's house price looks great");
}


