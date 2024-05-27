/* Question 21 They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items.*/

interface Fruit {
    name: string;
    color: string;
    isTasty: boolean;
}

const myFruit: Fruit = {
    name: "Apple",
    color: "Red",
    isTasty: true
};

console.log("My Fruit:", myFruit);
