// File: scripts.js

// Task 1: For Loop
console.log("Task 1: For Loop - Printing numbers from 1 to 10");
for (let counter = 1; counter <= 10; counter++) {
    console.log(`Number: ${counter}`); // Print each number
}

console.log("\n"); // Line break for clarity between tasks

// Task 2: While Loop
console.log("Task 2: While Loop - Printing a list of my favorite hobbies");
const hobbies = ["Reading", "Gaming", "Cooking", "Traveling", "Photography", 
                 "Watching", "Drawing", "Writing", "Cycling", "Jogging"];

let index = 0; // Initialize the index for the while loop
while (index < hobbies.length) {
    console.log(`Hobby #${index + 1}: ${hobbies[index]}`); // Print each hobby with its index
    index++; // Increment the index to avoid an infinite loop
}
