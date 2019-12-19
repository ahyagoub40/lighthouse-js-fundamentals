// define an array of ingredients
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
let i = 0; // define our counter variable with an initial value of zero

// a while loop that prints out the contents of ingredients:
while (i < ingredients.length){
    console.log(ingredients[i]); // prints the item at index i
    i++; // increment the counter by 1 every iteration
}

// Write a for loop that prints out the contents of ingredients:
for ( i = 0; i < ingredients.length; i++){
    console.log(ingredients[i]); // prints the item at index i
}

// while loop that prints out the contents of ingredients backwards:

// start form the last index of the array to the first
i = ingredients.length-1; // starting value of the counter
while (i >= 0){  // stopping condition
    console.log(ingredients[i]); // prints the item at index i
    i--; // decrement the counter by 1 every iteration
}