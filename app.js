let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('comp-score')
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function getComputerChoice() {
	const choices = ["r","p","s"]
	const randomNumber = Math.floor(Math.random()*3)
	return choices[randomNumber]
	
}
function fullform(letter) {
	if (letter === "r") {
		return "Rock"


	}
	if (letter === "p") {return "Paper"} 
		else {return "Scissors"}

}
function win(userChoice,computerChoice) {
	userScore++
	userScore_span.innerHTML = userScore
	result_p.innerHTML = fullform(userChoice) + ' beats ' + fullform(computerChoice) + '. You win!'
	document.getElementById(userChoice).classList.add('green-glow')
   	setTimeout( () => document.getElementById(userChoice).classList.remove('green-glow'), 300);
	
	document.getElementById(computerChoice).classList.add('red-glow');
   	setTimeout( () => document.getElementById(computerChoice).classList.remove('red-glow'), 300);



}
function lose(userChoice,computerChoice) {
	computerScore++
	computerScore_span.innerHTML = computerScore
	result_p.innerHTML = fullform(computerChoice) + ' beats ' + fullform(userChoice) + '. You lose!'
	document.getElementById(userChoice).classList.add('red-glow')
   	setTimeout( () => document.getElementById(userChoice).classList.remove('red-glow'), 300);
	
	document.getElementById(computerChoice).classList.add('green-glow');
   	setTimeout( () => document.getElementById(computerChoice).classList.remove('green-glow'), 300);

	
}
function draw(userChoice,computerChoice) {
	result_p.innerHTML = 'Its a draw!'
	document.getElementById(userChoice).classList.add('gray-glow')
	setTimeout( () => document.getElementById(userChoice).classList.remove('gray-glow'), 300);
	
	document.getElementById(computerChoice).classList.add('gray-glow');
   	setTimeout( () => document.getElementById(computerChoice).classList.remove('gray-glow'), 300);

	
	
}
function game(userChoice) {	
	const computerChoice = getComputerChoice()
	const bruh = userChoice + computerChoice
	switch(bruh) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice)
			break
		case "sr":
		case "rp":
		case "ps":
			lose(userChoice,computerChoice)
			break
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice,computerChoice)
			break				


	}
	


}


function main() {
	rock_div.addEventListener('click', function() {
		game("r")
	})

paper_div.addEventListener('click', function() {
		game("p")
	})
scissors_div.addEventListener('click', function() {
		game("s")
	})
}

main()