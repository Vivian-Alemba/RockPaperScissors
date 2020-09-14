function computerPlay(){
    let randomChoice= (Math.floor( Math.random()*3))
    switch(randomChoice){
      case 0:
      return "rock";
      break;
      case 1:
      return "paper";
      break;
      case 2:
      return "scissors"
      break;
      default:
      return "play again"
  
    }
        
  }
  // testing purposes
   console.log(computerPlay())
   let playerSelection=prompt("place your hand to play with computer")
   const computerSelection=computerPlay()
  function game(){
    function roundPlay(playerSelection,computerSelection){
      if(computerSelection==="rock" && playerSelection==="scissors" || computerSelection==="scissors" && playerSelection==="rock"){
        return "Rock crushes scissors,rock won"
        console.log("player won")
      }else if(computerSelection==="paper" && playerSelection==="rock" || computerSelection=="rock" && playerSelection==="paper"){
        return "paper covers rock,paper won"
      }else if(computerSelection==="scissors" && playerSelection==="paper" || computerSelection==="paper" && playerSelection==="scissors"){
        return "Scissors cut paper,scissors won"
      }
      else if (computerSelection === playerSelection){
          return "you tie the game"
      }
    
    
    }
     console.log(roundPlay(playerSelection,computerSelection))
    // console.log(roundPlay(playerSelection,computerSelection))
    // console.log(roundPlay(playerSelection,computerSelection))
    
    function Play(playerSelection,computerSelection){
      if(computerSelection==="rock" && playerSelection==="scissors" || computerSelection==="scissors" && playerSelection==="paper"){
        console.log("computer won")
      }else{
        console.log("User won")
      }
    
    
    }
    
   
    console.log(Play(playerSelection,computerSelection))
    // console.log(Play(playerSelection,computerSelection))
    // console.log(Play(playerSelection,computerSelection))
    // console.log(Play(playerSelection,computerSelection))
    // console.log(Play(playerSelection,computerSelection))
    console.log(playerSelection)
  
    
    
    
  
  }
  game()
  
  
  
  
  
  