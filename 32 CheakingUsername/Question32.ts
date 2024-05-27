/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the 
new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. 
If it has, print a message that the person will need to enter a new username.
 If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should ot
 be accepted.*/
let current_users: string[] = ["maliha", "maria", "ayesha", "abrisj", "mona"];
let new_users: string[] = ["aqsa", "iqra", "manisha", "Hania", "madiha"];
for (let new_username of new_users) {
    let usernameExists: boolean = false;
    for (let current_username of current_users) {
        if (new_username.toLowerCase() === current_username.toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log(`The username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_username}' is available.`);
    }
}
