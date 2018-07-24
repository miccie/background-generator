var userId = [{
	username: "Anette",
	password: "Mike"
},

{
	username: "Mike",
	password: "123"
},

{
	username: "Zbigniew",
	password: "777"
}];

var newsFeed = [
{
	user: "Anette",
	timeline: "I will eat more onions when I'm ill!"
},

{
	user: "Dorotte",
	timeline: "Love my doggies!"
},

{
	user: "Patrik",
	timeline: "So excited to play FIFA with Mike soon!"
},

{
	user: "Mike",
	timeline: "Woaaaahh dat JAVASCRIPT!"
}
];

var userName = prompt("What is your name you little beauty?");
var userPassword = prompt("Who do you hate the most?");

var userIdLength = userId.length;

/*IsUserValid function checks all the users' usernames and password,
returns false when none of the conditions is met*/

function IsUserValid(user, pass) {
	for (var i=0; i < userIdLength; i++) {
		if (userName === userId[i].username && userPassword === userId[i].password) {
			return true;
		} 
		else { 
			return false;
		}
	}
}

IsUserValid(userName, userPassword);

function SignIn() {
	if (IsUserValid(userName, userPassword) === true) {
		console.log(newsFeed),
		alert("It is so sad... But you've signed in successfully!")
	} else {
		alert("We all know who do you hate the most.. Don't lie you little liar!");
	}
}

//function SignIn(user,pass) {
	//if (user === userId[i].username && pass === userId[i].password) {
		//console.log(newsFeed),
		//alert("It is so sad... But you've signed in successfully!")
	//} else {
		//alert("We all know who do you hate the most.. Don't lie you little liar!");
	//}
//}

SignIn();