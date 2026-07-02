//loops
for (let i = 1; i<=10; i++)
{if (i%2==1)
{console.log(i)};
}
{console.log("End of loops -----------------\n")}

//Creating an Array
const myArr = ["I love RP!",true];

console.log(myArr[0])
console.log(myArr[1])
{console.log("End of arrays -----------------\n")}

// Accessing Array Elements
const myArra = ["I Love RP!", true, 5];

for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
}
{console.log("End of Accessing Array Elements -----------------\n")}

// Functions
function multiplyTen(num) {
    return num * 10;
}

console.log("Answer is: " + multiplyTen(5))
{console.log("End of Functions -----------------\n")}

// Create an empty array called carpark
const carpark = [];

// Create 3 new cars: car1, car2, car3
const car1 = { make: "Ferrari", model: "F40", color: "Yellow" };
const car2 = { make: "Ford", model: "Mustang", color: "Red" };
const car3 = { make: "Mercedes", model: "Benz", color: "White" };

// Add car1 to carpark
carpark.push(car1);

// Insert car2 to front of carpark
carpark.unshift(car2);

// Insert car3 to second position in carpark
carpark.splice(1, 0, car3);

// Remove last car in carpark
carpark.pop();

// Use for loop to display all cars
for (let i = 0; i < carpark.length; i++) {
    const myCar = carpark[i]; // Retrieve each car object
    console.log("Car Make: " + myCar.make);
    console.log("Car Model: " + myCar.model);
    console.log("Car Color: " + myCar.color);
    console.log("");
}

console.log("End of Array of Objects ------------------------------\n");


// Q1
const studentName = "Daniel";
const studentAge = 21;
console.log("Hi, my name is " + studentName + " and I am " + studentAge + " years old.\n");
console.log("End of Q1 ------------------------------\n");

// Q2
const moduleCode = "C237";
console.log("I am learning module " + moduleCode + " this semester.\n");
console.log("End of Q2 ------------------------------\n");

// Q3
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("");
console.log("End of Q3 ------------------------------\n");

// Q4
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("");
console.log("End of Q4 ------------------------------\n");

// Q5
const favThings = ["Coding", "Music", "Cats"];
console.log(favThings[0]);
console.log(favThings[1]);
console.log(favThings[2]);
console.log("");
console.log("End of Q5 ------------------------------\n");

// Q6
for (let i = 0; i < favThings.length; i++) {
    console.log(favThings[i]);
}
console.log("");
console.log("End of Q6 ------------------------------\n");

// Q7
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
console.log("");
console.log("End of Q7 ------------------------------\n");
