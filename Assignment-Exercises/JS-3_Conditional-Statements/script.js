/**
 * checkAge() Function
 * This function retrieves the user's age input, validates it, and categorizes the user based on their age.
 */
function checkAge() {
    // Step 1: Retrieve the user's age input
    const ageInput = document.getElementById('ageInput').value;

    // Step 2: Validate the input and initialize the category variable
    let category; // Variable to hold the age category

    if (isNaN(ageInput) || ageInput.trim() === "") {
        // Check if the input is not a number or is empty
        category = "Invalid age. Please enter a valid number.";
    } else {
        // Convert input to a number for further evaluation
        const age = Number(ageInput);

        if (age < 0) {
            // Negative age is invalid
            category = "Invalid age. Please enter a valid number.";
        } else if (age >= 0 && age <= 12) {
            // Age between 0 and 12 is categorized as "Child"
            category = "Child";
        } else if (age >= 13 && age <= 19) {
            // Age between 13 and 19 is categorized as "Teenager"
            category = "Teenager";
        } else if (age >= 20) {
            // Age 20 or above is categorized as "Adult"
            category = "Adult";
        } else {
            // Catch-all case for any unexpected inputs
            category = "Invalid age. Please enter a valid number.";
        }
    }

    // Step 3: Display the category in the console (or update the UI as needed)
    console.log("Age Category:", category);

    // Optionally, display the category in an HTML element
    const resultElement = document.getElementById('result');
    if (resultElement) {
        resultElement.textContent = `Category: ${category}`;
    }
}
