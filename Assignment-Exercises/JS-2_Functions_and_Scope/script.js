/********************
 Step 1: Create Global Variables
********************/
var globalVar = "I am a global variable.";
var anotherGlobalVar = 100;

/********************
 Step 2: Create a Function to Demonstrate Function Scope
********************/
function demoFunctionScope() {
    // Declare a local variable
    let localVar = "I am a local variable.";
    
    // Log both the global variable(s) and the local variable
    console.log("Inside the function:");
    console.log(globalVar); // Logs the global variable
    console.log(anotherGlobalVar); // Logs the second global variable
    console.log(localVar); // Logs the local variable
    
    // Return a string combining the global and local variables
    return `${globalVar}, ${anotherGlobalVar}, and ${localVar}`;
}

/********************
 Step 3: Call the Function and Log Its Return Value
********************/
const functionResult = demoFunctionScope(); // Call the function
console.log("Function return value:");
console.log(functionResult); // Log the returned value

/********************
 Step 4: Demonstrate Block Scope
********************/
if (true) { // This block will always execute
    // Declare a block-scoped variable
    let blockVar = "I am block-scoped.";
    console.log("Inside the block:");
    console.log(blockVar); // Log the block-scoped variable
}

try {
    // Attempt to log the block-scoped variable outside the block
    console.log("Outside the block:");
    console.log(blockVar); // This will throw an error because blockVar is not defined here
} catch (e) {
    console.error("Error:", e.message); // Log the error message
}
