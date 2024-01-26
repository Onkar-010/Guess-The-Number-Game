'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  let score = Number(document.querySelector('.score').textContent);
  let highscore = Number(document.querySelector('.highscore').textContent);

  console.log(score);

  console.log(guess);
  const Numberguess = Number(guess);
  // No Guess
  if (guess === '') {
    document.querySelector('.message').textContent = 'No Number entered';
  }
  //   There is a Guess
  else {
    // Guess Is Correct
    if (Numberguess === secretNumber) {
      document.querySelector('.message').textContent =
        'Conguratulation YO Guesed it';
      // GETTING THE HIGHSCORE
      document.querySelector('.highscore').textContent = `${
        highscore < score ? (highscore = score) : (highscore = highscore) // GETTING THE HIGHSCORE
      }`;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
      // Extra functionality of Enabling and disableing the Button
      document.getElementById('checkbtn').disabled = true;
    }

    //  When the Guess is Wrong
    else if (Numberguess !== secretNumber) {
      if (score > 0) {
        document.querySelector('.message').textContent =
          Numberguess > secretNumber ? 'TO High' : 'To Low ';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          'You Lost Your All Chances';
      }
    }
  }
});

// Implementation of Again Button

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start Guessing.....!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // Extra functionality of Enabling and disableing the Button
  document.getElementById('checkbtn').disabled = false;
});

// Another way off Implementing Again Button But Highscore Reset's
/*
document.querySelector('.again').addEventListener('click', function () {
  window.location.reload();
});

*/
