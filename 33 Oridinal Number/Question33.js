/*Question 33 Ordinal Numbers: Ordinal numbers indicate theirposition in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the
• Use an if-else chain inside the loop to print the proper ordinal ending for each number*/
var Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, Numbers_1 = Numbers; _i < Numbers_1.length; _i++) {
    var Number_1 = Numbers_1[_i];
    var ordinal = void 0;
    if (Number_1 === 1) {
        ordinal = "st";
    }
    else if (Number_1 === 2) {
        ordinal = "nd";
    }
    else if (Number_1 === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log("".concat(Number_1).concat(ordinal));
}
