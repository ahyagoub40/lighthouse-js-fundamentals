const chorus = "Let's dance!"; // define a constant string
let repeat = 0;  // a variable with initial value of zero
while (repeat < 10){
    if (repeat ===5){   // if the value of repeat is 5, do this
        console.log("*change key*");
    }
    console.log(chorus);      // while the value of repeat is less 10, print the value of chorus
    repeat++;    // increment repeat value by 1 after every iteration 

}
console.log("Until the sun comes up!"); // afer the loop is complete, disply this
