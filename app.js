console.log('hi');
const getUserChoice = userInput =>{
  userInput.toLowerCase();
  if(userInput ==='rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput
  }
  else{
    console.log('Error not a valid input')
  }
}
const getComputerChoice = () =>{
  let choice = Math.floor(Math.random()* 3)
  if(choice === 0){
    return 'rock'
  }
  else if(choice === 1){
    return 'paper'
  }
  else{
    return 'scissors'
  }
}

const determineWinner = (userChoice, computerChoice) =>{
  if(userChoice === computerChoice){
    return 'tie'
  }
  else if( userChoice === 'rock' && computerChoice === 'paper'){
    return 'You lost'
  }
  else if (userChoice === 'paper' && computerChoice === 'scissors'){
    return 'You lost'
  }
  else if (userChoice === 'scissors' && computerChoice === 'rock'){
    return 'You lost'
  }
  else{
    return 'You win'
  }
}
const playGame = () =>{
  let userChoice = getUserChoice('rock')
  console.log(userChoice)
  let computerChoice = getComputerChoice()
  console.log(computerChoice)
  console.log(determineWinner(userChoice, computerChoice))
}
playGame()