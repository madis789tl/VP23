const firstName = "madis";
const lastName = "valliste";

console.log("programmi autor on: " + firstName + " " + lastName);

function dateETformater(){

const monthNamesET = ["jaanuar", "veebruar",  "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
//console.log(monthNamesET[1]);



let timeNow = new Date();
//console.log(timenow());

let dateNow = timeNow.getDate();
let monthNow = timeNow.getMonth();
let yearNow = timeNow.getFullYear();
//let dateET = dateNow + "." + (monthNow + 1) + "." + yearNow;
let dateET = dateNow + ". " + monthNamesET[monthNow] + " " + yearNow;
return dateET;
}

let dateETNow = dateETformater();

console.log("Täna on: " + dateETNow);
console.log("Täna on tõesti " + dateETformater());