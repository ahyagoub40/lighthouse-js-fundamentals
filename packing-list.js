// an array for stuff to pack
const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];
// display this message to the console
console.log("Kitchen stuff to pack:");
let i = 0; // starting value of the counter
// iterate through every item in the array
while (i < packingList.length){ 
    console.log(packingList[i]); // display the item at the specified index
    i++;  // counter
}