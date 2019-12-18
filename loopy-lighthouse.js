let number // declare a variable without a value

for (number=100; number <= 200; number++){  // starting with 100, display the number value till 200
    if (number%3===0 && number%4===0){
        console.log("LoopyLighthouse");    // if the number is divisible by 3 and 4, display the string
    }
    else if (number%3===0){
        console.log("Loopy");    // if the number is divisible by 3, display the string
    }
    else if (number%4===0){
        console.log("Lighthouse");    // if the number is divisible by 4, display the string
    }
    else{
    console.log(number);
    }
}
