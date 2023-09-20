 // Generate a random secret number between 1 and 100
 const secretNumber = Math.floor(Math.random() * 100) + 1;

 // Initialize variables
 let attempts = 0;
 const guesses = [];

 // Main game loop
 while (true) {
     // Prompt the user for a guess
     const guess = prompt("Guess a number between 1 and 100:");

     // Check if the guess is valid
     if (guess === null || guess === "") {
         alert("Please enter a valid number.");
         continue;
     }

     const parsedGuess = parseInt(guess);

     if (isNaN(parsedGuess) || parsedGuess < 1 || parsedGuess > 100) {
         alert("Please enter a valid number between 1 and 100.");
         continue;
     }

     // Increment the number of attempts
     attempts++;

     // Add the guess to the list of guesses
     guesses.push(parsedGuess);

     // Check if the guess is correct
     if (parsedGuess === secretNumber) {
         alert(`Congratulations! You guessed the correct number (${secretNumber}) in ${attempts} attempts.`);
         break;
     } else if (parsedGuess < secretNumber) {
         alert("Too low! Try again.");
     } else {
         alert("Too high! Try again.");
     }
 }

 // Display the list of guesses and number of attempts
 document.write("<h2>Game Over</h2>");
 document.write("<p>Your guesses: " + guesses.join(", ") + "</p>");
 document.write("<p>Number of attempts: " + attempts + "</p>");