// "QUESTION 1"
// Using let
let num1 = 10;
let num2 = 20;
let sum = num1 + num2; // Addition
console.log(sum);
// Reassigning
num1 = 25;
num2 = 15;
let difference = num1 - num2; // Subtraction
console.log(difference);

// Using var
var num3 = 5;
var num4 = 3;
var product = num3 * num4; // Multiplication
console.log(product);
// Reassigning
num3 = 8;
num4 = 2;
var division = num3 / num4; // Division
console.log(division);

// Using const
const len = 6;
const breadth = 4;
const area = len * breadth; 
console.log(area);

console.log("");

// "QUESTION 2"
// MAP 
let numbers = [1, 2, 3, 4];
const square_nums = numbers.map(num => num * num);
console.log(square_nums);
// FILTER
const even_numbers = numbers.filter(num => num % 2 === 0);
console.log(even_numbers);
// REDUCE
const sum2 = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum2);
// FLAT MAP 
const words = ["hello", "world"];
const result = words.flatMap(word => word.split(''));
console.log(result);

console.log("");

// "QUESTION 3"
function displayGreeting(displayName) {
  console.log("Hello");
  displayName();
  console.log("Good Morning!");
}
function displayRahul() {
  console.log("Rahul");
}
displayGreeting(displayRahul);

console.log("");

// "QUESTION 4"
function rev_str(s) {
    let to_arr = s.split(''); 
    let rev_arr = to_arr.reverse();
    let final_str = rev_arr.join('');
    return final_str;
}
let giv_str = "Hello, World!";
let res = rev_str(giv_str);
console.log(res);

