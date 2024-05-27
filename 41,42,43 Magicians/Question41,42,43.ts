//Question 41,42,43

// Question 41: show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}
// Question 42: make_great function
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
// Question 43: Call make_great with a copy of the original array
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
let great_magicians: string[] = make_great([...magicians]);

// Printing magicians and great_magicians arrays to verify changes
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);


