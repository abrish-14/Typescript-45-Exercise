/*Question 24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. Have at least one True and one 
False result for each of the following:*/

let fruit = 'apple';
let color = 'red';
let age = 25;
let numBooks = 5;
let Animals = ['cat', 'dog', 'rabbit'];

console.log("Is the fruit an apple? Prediction: True");
console.log(fruit === 'apple'); // True

console.log("Is the color blue? Prediction: False");
console.log(color === 'blue'); // False

console.log("Is the fruit all lowercase? Prediction: True");
console.log(fruit.toLowerCase() === 'apple'); // True

console.log("Is the color all lowercase? Prediction: True");
console.log(color.toLowerCase() === 'red'); // True

console.log("Is the age greater than 18? Prediction: True");
console.log(age > 18); // True

console.log("Is the number of books less than 10? Prediction: True");
console.log(numBooks < 10); // True

console.log("Is the color red and the fruit an apple? Prediction: True");
console.log(color === 'red' && fruit === 'apple'); // True

console.log("Is the age less than 18 or the number of books greater than 10? Prediction: False");
console.log(age < 18 || numBooks > 10); // False

console.log("Is 'dog' in the Animals array? Prediction: True");
console.log(Animals.includes('dog')); // True

console.log("Is 'fish' not in the Animals array? Prediction: True");
console.log(!Animals.includes('fish')); // True

