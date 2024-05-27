//Question 14 15 16 17 19
var guestList = ["madiha", "maria", "maliha"];
function sendInvitation(guest) {
    return "Dear ".concat(guest, ",\nYou are cordially invited to dinner. Please let me know if you can attend.\n\nBest regards,\n[Abrish Rathoor]");
}
guestList.forEach(function (guest) {
    console.log(sendInvitation(guest));
});
var guestCantMakeIt = "maria";
console.log("\nUnfortunately, ".concat(guestCantMakeIt, " can't make it to the dinner.\n"));
var newGuest1 = "rafea";
guestList[guestList.indexOf(guestCantMakeIt)] = newGuest1;
guestList.forEach(function (guest) {
    console.log(sendInvitation(guest));
});
// Exercise 15: Changing Guest List
var guestCantMakeItAgain = "madiha";
console.log("\nUnfortunately, ".concat(guestCantMakeItAgain, " can't make it to the dinner.\n"));
var newGuest2 = "affreen";
guestList[guestList.indexOf(guestCantMakeItAgain)] = newGuest2;
guestList.forEach(function (guest) {
    console.log(sendInvitation(guest));
});
// Exercise 16: More Guests
console.log("\nGreat news! We found a bigger dinner table.\n");
guestList.unshift("hania");
guestList.splice(Math.floor(guestList.length / 2), 0, "Abrish");
guestList.push("Alia");
guestList.forEach(function (guest) {
    console.log(sendInvitation(guest));
});
// Exercise 17: Shrinking Guest List
console.log("\nSorry, we can only invite two people for dinner.\n");
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
guestList.forEach(function (guest) {
    console.log(sendInvitation(guest));
});
guestList = [];
console.log("\nThe list is now empty:", guestList);
// Exercise 19: Dinner Guests
console.log("\nNumber of people invited to dinner: ".concat(guestList.length));
