var guessNumber = Math.random(1,10);
prompt('guess a number between 1-10');
if (prompt == guessNumber) {
	console.log('congrats you got it right')
} else {
	console.log('no guess again')
}