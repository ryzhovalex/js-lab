1. Generate a random number between 1 and 100.
1. Record the turn number the player is on. Start it on 1.
1. Provide the player with a way to guess what the number is.
1. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
1. Next, check whether it is the correct number.
1. If it is correct:
1. Display congratulations message.
1. Stop the player from being able to enter more guesses (this would mess the game up).
1. Display control allowing the player to restart the game.
1. If it is wrong and the player has turns left:
1. Tell the player they are wrong and whether their guess was too high or too low.
1. Allow them to enter another guess.
1. Increment the turn number by 1.
1. If it is wrong and the player has no turns left:
1. Tell the player it is game over.
1. Stop the player from being able to enter more guesses (this would mess the game up).
1. Display control allowing the player to restart the game.
1. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.