const firstName = "madis";
const lastName = "valliste";
const dateValue = require("./date_et");
console.log("programmi autor on: " + firstName + " " + lastName);



let dateETNow = dateValue.dateETformater();

console.log("Täna on: " + dateETNow);
console.log("Täna on tõesti " + dateValue.dateETformater());