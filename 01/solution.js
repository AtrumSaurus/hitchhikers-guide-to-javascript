// ## Let & const
// 1. Write a program that prints the mean between 3 numbers. Then subtract to one of the numbers the value of the mean and prints that value.

const b = -11;
const c = 10;
let a = 5;

const mean = ( a + b + c ) / 3;
a -= mean;

console.log(mean, a);


// ## Arrays
// 1. Write a program that prints the mean between an array of numbers.
const listOfNumbers = [1, 3, 5, -10, 0, 3**2];
const meanOfLON = listOfNumbers.reduce((n, acc) => n + acc, 0) / listOfNumbers.length;

console.log(meanOfLON);
// 2. Write a program that prints the mean between only the numbers in an array like [1, true, "test", undefined, 3 , null].

const mixedList = [1, true, "test", undefined, 5 , null];
const list = mixedList.filter(e => typeof e === 'number')
const meanOfList = list.reduce((n, acc) => n + acc, 0) / list.length;

console.log(meanOfList);

// 3. Find a way to create an array of only even numbers (up to 10 inclusive) using just 1 line of code.
const evens = [...Array(11).keys()].filter(v => v % 2 === 0);
console.log(evens);

console.log(JSON.stringify(Array(11))); // just to see


// ## Objects
// 1. Create a person object having the following properties: firstName, lastName, age, car each set to null.
const person = {
    firstName: null,
    lastName: null,
    age: null,
    car: null,
};

// 2. Create a car object storing the model and the plate.
const car = {
    model: 'Bat Mobile',
    plate: 'XX 111 YY'
};

// 3. Create two DIFFERENT person objects and assign the car object of before
const robin = Object.assign({}, person, { firstName: 'Robin', lastName: 'Red', age: 22 })
const batman = Object.assign({}, person, { firstName: 'Batman', lastName: 'Knight', age: 35 })

batman.car = car;
robin.car = batman.car;

console.log(batman, robin);

// 4. Change the car model and plate properties. What happened?
car.model = 'Robin Mobile';
car.plate = 'AA 222 BB';


console.log(batman, robin);