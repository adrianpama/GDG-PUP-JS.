// Step 1: Create a car object
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

// Step 2: Create a function to describe the car
function getDescription(car) {
    const description = `This car is a ${car.year} ${car.make} ${car.model}.`;
    return description;
}

// Step 3: Call the function and display the result
const carDescription = getDescription(car);
console.log(carDescription);
