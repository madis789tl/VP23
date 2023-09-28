const firstName = "madis";
const lastName = "valliste";
//const datetimeValue = require("./datetime_et")
const fs = require("fs");
//let folkWisdom = "";

fs.readFile ("txtfiles/vanasonad.txt", "utf8", (err, data)=>{
	if(err){
		console.log(err);
	}
	else {
		//console.log(data);
		//folkWisdom = data;
		onScreen(data);
	}
});//readFaile lõppeb

const onScreen = function(folkWisdom){
	console.log("programmi autor on: " + firstName + " " + lastName);
	//console.log("Täna on: " + datetimeValue.dateETformatted());
	//console.log(folkWisdom);
	let folkWisdoms = folkWisdom.split(";");
	//console.log(folkWisdoms);
	//console.log(folkWisdoms.lenght);
	//console.log("tänane tarkus: " + folkWisdoms[Math.floor(Math.random() * folkWisdoms.lenght)]);
	//Kõige tavalisem for tsükel (loo)
	for (let i = 0; i < folkWisdoms.length; i ++){
		console.log("Vanasõna nr "  + (i + 1) + ': "'  + folkWisdoms[i] + '"');
	}
	//console.log("kell on " + datetimeValue.timeETformatted())
	//console.log("paregu on " + datetimeValue.timeOfDayET() + ":");
	//console.log(datetimeValue.monthsET);
}


//let dateETNow = dateValue.dateETformater();