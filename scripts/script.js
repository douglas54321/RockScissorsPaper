// 'true' allows debug messages in console
let debug = false;

function getRandomInt(min, max)
{
    // Math.random() returns a whole number. Parse for Int
    return parseInt(Math.random() * (max - min) + min);
}

// return string representing computer's move
function computerPlay()
{
  // generate random integer 0-2
  let computerMove = getRandomInt(0, 3);
  if(debug) console.log("computerMove = " + computerMove + ".");

  // return appropriate move.
  switch(computerMove)
  {
    case 0: return "Rock";
    case 1: return "Scissors";
    case 2: return "Paper";
    default:
      Alert("ERROR: computerPlay switch to default - returns rock");
      return "Rock";
  }
}

// return string containing result a single round
function singleRound(playerMove, computerMove)
{
  // toUpperCase makes input case insensitive
  switch(playerMove.toUpperCase())
  {
    case "ROCK":
      if        (computerMove=="Scissors")
        return "Player Wins! " + playerMove + " > " + computerMove + "." ;
      else if   (computerMove=="Paper")
        return "Computer Wins! " + computerMove + " > " + playerMove + "." ;
      else if   (computerMove=="Rock")
        return "Its a Tie! "  + playerMove + " == " + computerMove + "." ;
      else
        return "ERROR: The computer is malfunctioning! Player Wins!";

    case "PAPER":
      if        (computerMove=="Rock")
        return "Player Wins! " + playerMove + " > " + computerMove + "." ;
      else if   (computerMove=="Scissors")
        return "Computer Wins! " + computerMove + " > " + playerMove + "." ;
      else if   (computerMove=="Paper")
        return "Its a Tie! "  + playerMove + " == " + computerMove + "." ;
      else
        return "The computer is malfunctioning! Player Wins!";

    case "SCISSORS":
      if        (computerMove=="Paper")
        return "Player Wins! " + playerMove + " > " + computerMove + "." ;
      else if   (computerMove=="Rock")
        return "Computer Wins! " + computerMove + " > " + playerMove + "." ;
      else if   (computerMove=="Scissors")
        return "Its a Tie! "  + playerMove + " == " + computerMove + "." ;
      else
        return "ERROR: The computer is malfunctioning! Player Wins!";

    default:
        return "Incorrect Player Input! Computer Wins!";
  }
}

function game ()
{
  for(let i=0; i<5; i++)
  {
    let playerMove = prompt("What is your move?  Rock / Scissors / Paper ?");
    let computerMove = computerPlay();

    console.log("Player's Move = " + playerMove + ". Computer's Move = " + computerMove + ".")
    console.log(singleRound(playerMove, computerMove));

  }
}

game();
