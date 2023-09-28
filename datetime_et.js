const dateETformatted = function(){

const monthNamesET = ["jaanuar", "veebruar",  "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

let timeNow = new Date();
let dateNow = timeNow.getDate();
let monthNow = timeNow.getMonth();
let yearNow = timeNow.getFullYear();
let dateET = dateNow + ". " + monthNamesET[monthNow] + " " + yearNow;
return dateET;
}



const timeETformatted = function(){
	let timeNow = new Date();
	return timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
}

const timeOfDayET = function(){
	let partOfDay = "Suvaline hetk";
	let hourNow = new Date().getHours();
	if(hourNow >= 6 && hourNow < 12){
		partOfDay = "hommik";
	}
	if(hourNow >14 && hourNow <13){
		
		partOfDay = "pärastlõuna";
	}
	if(hourNow >= 18){
		partOfDay = "õhtust";
	}
	
	return partOfDay;
	
}


//esprondin kõik asjad
module.exports = {dateETformatted: dateETformatted, timeETformatted: timeETformatted,monthsET: monthNamesET, timeOfDayET: timeOfDayET};