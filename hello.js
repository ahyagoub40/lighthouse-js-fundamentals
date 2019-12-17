const sayHello = function (name){ // function with parameter name that displays the following message to console
    console.log("Hello, " + name);
}

sayHello("Caliban");  // calling the function with an argument 
sayHello("Miranda");  // calling the function with an argument 
sayHello("Ferdinand");  // calling the function with an argument 

let sayHelloToConsole = function (name){
    console.log("Hello, "+ name);
}
sayHelloToConsole("John");  

sayHelloToConsole = function (name){
    return "Hello, "+ name;  // return doesn't output anything to the console. 
}
const greeting = sayHelloToConsole("John");  // the value returned by the console assigned to a const
console.log(greeting); // display the value of the const