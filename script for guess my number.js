//webpage element access
let checkBtn = document.querySelector('.btn-check');
let attemptsLeftEl = document.querySelector('#attempts-left');
let txtNumber = document.querySelector('.input-number');
let messageEl = document.querySelector('.message');
let secretNumberEl = document.querySelector('.secret-number');
let body = document.querySelector('body');
let highScoreEl = document.querySelector('.current-high-score');
let currentScoreEl = document.querySelector('#current-score');
let newGameBtn = document.querySelector('.new-game');

//create all global variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let attemptsLeft = 10;
let highScore = 0;

//add an event listner on check button
checkBtn.addEventListener('click',function(){
    if(attemptsLeft > 0){
        attemptsLeft--;
        attemptsLeftEl.textContent = attemptsLeft;

        //get the number entered by the user
        let guess = Number(txtNumber.Value);

        //no input
        if(guess === 0){
          messageEl.textContent = 'No number or 0 is entered!';
        }
        //guessed correct number
        else if(guess === secretNumber){
           //display a message
           messageEl.textContent = 'You won the game!';
           
           //display the secret number
           secretNumberEl.textContent = secretNumber;

           //change of background
           body.style.backgroundColor = '#52BE80';

           //set high score to current score
           highScore = currentScore > highScore ? currentScore : highScore;
           highScoreEl.textContentvv
        }
        //guessed wrong number
        else if(guess !== secretNumber){
            if(currentScore > 0){
                body.style.backgroundColor = '#EC7063';
                setTimeout(() => {body.style.backgroundColor = '#222';}, 300)

                let message = guess > secretNumber ? 'You guessed too high!'
                    : 'You guessed too low!';
                messageEl.textContent = message;
                currentScore--;
                currentScoreEl.textContent = currentScore;
            } else {
                messageEl.textContent = 'You have lost the game!';
                currentScoreEl.textContent = 0;
                body.style.backgroundColor = '#EC7063';
            }
        }
    }
    else{
        //lost the game
        messageEl.textContent = 'You have lost the game!';
        attemptsLeft.textContent = 0;
        body.style.backgroundColor = '#EC7063';
    }
});

newGameBtn = addEventListener('click',function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    currentScore = 20;
    attemptsLeft = 10;
    messageEl.textContent = 'Guess a number between 1-20';
    currentScoreEl.textContent = currentScore;
    attemptsLeft.textContent = attemptsLeft;
    secretNumberEl.textContent = '?';
    txtNumber.Value = '';
    body.style.backgroundColor = '#222';
})