var drawnNumbers = []
var limit = 10;
let randomNumber = getRandomNumber();
let tries = 1

function verificarChute() {
	let guess = document.querySelector('input').value;
	if (guess == randomNumber){
		showTextInScreen('h1', 'Acertou!');
		let try_word = tries == 1 ? 'tentativa':'tentativas';
		let mensage = `Você descobriu o número em ${tries} ${try_word}.`;
		showTextInScreen('p', mensage);
		document.getElementById('reiniciar').removeAttribute('disabled');
	} else {
		if (guess > randomNumber) {
			showTextInScreen('p', 'O número secreto é menor');
		} else {
			showTextInScreen('p', 'O número secreto é maior');
		}
		tries++;
		clearInputBox()
	}
}


function clearInputBox() {
	guess = document.querySelector('input');
	guess.value = '';
}

function restartGame(){
	randomNumber = getRandomNumber();
	tries = 1;
	showTextInScreen('p', 'Escolha um número entre 1 e 10');
	showInitMessage();
	document.getElementById('reiniciar').setAttribute('disabled', true)
	clearInputBox();
}
function showTextInScreen(tag, text){
	let newElement = document.querySelector(tag);
	newElement.innerHTML = text;
	responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}

function getRandomNumber() {
	let chosenNumber = parseInt(Math.random() * limit + 1);
	if (drawnNumbers.length == limit){
		drawnNumbers = [];
	}
	if (drawnNumbers.includes(chosenNumber)){
		return getRandomNumber();
	} else {
		drawnNumbers.push(chosenNumber);
		return chosenNumber;
	}
}

function showInitMessage() {
	showTextInScreen('h1','Jogo do número secreto');
	showTextInScreen('p','Escolha um número entre 1 e 10');
}

showInitMessage();
