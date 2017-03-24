var counter = {shelly: 0, player: 0}

function play() {
	var user = document.querySelector('input[name="choice"]:checked').value;
	console.log("user: " + user);

	var computer = Array('Rock','Paper','Scissors','Lizard','Spock');
	var compChoice = computer[Math.random()*computer.length>>0]

console.log("computer: " + compChoice);
document.getElementById('comp').innerHTML = compChoice;

if (user == compChoice) {
	document.getElementById('res').innerText = "Tie, play the next round"
}

//Spock
else if (user == 'Spock' && (compChoice !== 'Lizard' && compChoice !== 'Paper')) {
	document.getElementById('res').innerText = "Your Spock wins";
	counter.player++;
}


else if (user == 'Spock' && (compChoice == 'Lizard' || compChoice == 'Paper')) {
	document.getElementById('res').innerText = "Your Spock loses";
	counter.shelly++;
}

//Lizard
else if (user == 'Lizard' && (compChoice == 'Spock' || compChoice == 'Paper')) {
	document.getElementById('res').innerText = "Your Lizard wins";
	counter.player++;
}

else if (user == 'Lizard' && (compChoice !== 'Spock' && compChoice !== 'Paper')) {
	document.getElementById('res').innerText = "Your Lizard loses";
	counter.shelly++;
}

//Rock
else if (user == 'Rock' && (compChoice == 'Scissors' || compChoice == 'Lizard')) {
	document.getElementById('res').innerText = "Your Rock wins";
	counter.player++;
}

else if (user == 'Rock' && (compChoice !== 'Scissors' && compChoice !== 'Lizard')) {
	document.getElementById('res').innerText = "Your Rock loses";
	counter.shelly++;
}

//Paper
else if (user == 'Paper' && (compChoice == 'Rock' || compChoice == 'Spock')) {
	document.getElementById('res').innerText = "Your Paper wins";
	counter.player++;
}
else if (user == 'Paper' && (compChoice !== 'Rock' && compChoice !== 'Spock')) {
	document.getElementById('res').innerText = "Your Paper loses";
	counter.shelly++;
}

//Scissors
else if (user == 'Scissors' && (compChoice == 'Paper' || compChoice == 'Lizard')) {
	document.getElementById('res').innerText = "Your Scissors wins";
	counter.player++;
}
else if (user == 'Scissors' && (compChoice !== 'Paper' && compChoice !== 'Lizard')) {
	document.getElementById('res').innerText = "Your Scissors loses";
	counter.shelly++;
}

document.getElementById('standing').innerText = "You " + counter.player + " : " + counter.shelly + " Sheldon";

}
