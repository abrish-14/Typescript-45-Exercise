/*Question 33 Ordinal Numbers: Ordinal numbers indicate theirposition in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the
• Use an if-else chain inside the loop to print the proper ordinal ending for each number*/ 

let Numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let Number of Numbers) {
    let ordinal: string;
    if (Number === 1) {
        ordinal = "st";
    } else if (Number === 2) {
        ordinal = "nd";
    } else if (Number === 3) {
        ordinal = "rd";
    } else {
        ordinal = "th";
    }
    console.log(`${Number}${ordinal}`);
}

