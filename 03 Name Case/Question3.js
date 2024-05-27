/*Question3 Name Cases: Store a person’s name in a variable, and then print that person’s name
in lowercase, uppercase, and titlecase.*/
var personname = "Abrish rathoor";
console.log(personname.toLowerCase());
console.log(personname.toUpperCase());
console.log(personname.split(' ').map(function (word) { return word.charAt(0).toUpperCase() +
    word.slice(1).toLowerCase(); }).join(' '));
