import { useState } from 'react'

import './index.css'
import './App.css'

function App() {

  let userChoice="";

  const [computerChoiceArray, setComputerChoice] = useState(["Rock" , "Paper" , "Scissor"])


  const condition = (value) => {

      userChoice = value;
  
   const randomIndex=Math.floor(Math.random() * computerChoiceArray.length)
  const computerChoice=computerChoiceArray[randomIndex];
  setComputerChoice(computerChoiceArray);

      if(userChoice === "Rock" && computerChoice === "Scissor")
      {
        
        alert(`"You Won!! Computer Chose ${computerChoice}`);
      }
      else if(userChoice === "Paper" && computerChoice === "Rock")
      {
        alert(`"You Won!! Computer Chose ${computerChoice}`);
      }
      else if(userChoice === "Scissor" && computerChoice === "Paper")
      {
        alert(`"You Won!! Computer Chose ${computerChoice}`);
      }
      else if(computerChoice === "Rock" && userChoice === "Scissor"){
        alert(`"Computer Won!! Computer Chose ${computerChoice} & User Chose ${userChoice}`);
      } 
      else if(computerChoice === "Paper" && userChoice === "Rock")
      {
        alert(`"Computer Won!! Computer Chose ${computerChoice} & User Chose ${userChoice}`);
      }
      else if(computerChoice === "Scissor" && userChoice === "Paper")
      {
        alert(`"Computer Won!! Computer Chose ${computerChoice} & User Chose ${userChoice}`);
      }
      else if(userChoice === computerChoice){
        alert(`"Game Draw!! User Chose ${userChoice} & Computer Chose ${computerChoice}`);
      
      }

     
     
     }
  

  return (
     <>
        <h1>Rock Scissor Paper Game</h1>
        <button onClick={() => condition("Rock")}><i className="fa-solid fa-hand-back-fist"></i></button>
        <button onClick={() => condition("Scissor")}><i className="fa-solid fa-hand-scissors"></i></button>
        <button onClick={() => condition("Paper")}><i className="fa-solid fa-hand"></i></button>
        
      </>
  )
}

export default App