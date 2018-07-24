var database = [
{
	name: "Anette",
	pass: "Mike"
},
{	
	name: "Dorcia",
	pass: "Patrik"
},
{	
	name: "Patrik",
	pass: "Dorcia"
},
{	
	name: "Mike",
	pass: "Anette"
}]

var newsFeed = [
{
	name: "Patrik",
	news: "Olala! ŁĘCZYCA!"
},
{	
	name: "Dorcia",
	news: "Tum dum dum! ŁĘCZYCA BUM!"
},
{	
	name: "Anette",
	news: "Tirarara! Michał nie spier...uciekaj!"
},
{	
	name: "Mike",
	news: "Pucykacy szukam pracy pucykacy szukam pracy!"
}]

var nameLogin = prompt("What is you name?");
var passLogin = prompt("What is your password?");

function isUserValid(username, password) {
	for (i=0; i < database.length; i++) {
		if (database[i].name === username && database[i].pass === password) {
			return true;
		}
	}
	return false;
}

function signIn(username, password) {
	if (isUserValid(username,password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username or password.")
	}
}

signIn(nameLogin,passLogin);


