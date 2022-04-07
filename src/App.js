
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import WinScore from './WinScore';
import Player from './Player'
import Winner from './Winner';
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App =() => {
  const [inputField , setInputField] = useState('')
  const [winScore, setWinScore] = useState(null)
  const [playerOneScore, setPlayerOneScore] = useState(0)
  
  const [playerTwoScore, setPlayerTwoScore] = useState(0)
  
  const [p1Turn, setP1Turn] = useState(true)
  const [p2Turn, setP2Turn] = useState(true)
  
  const [playerOneWinValue, setPlayerOneWinValue] = useState(false);
  const [playerTwoWinValue, setPlayerTwoWinValue] = useState(false);

  const [inputValue, setInputValue] = useState('')
 
 
  


  const generateNumber = () =>{
   return Math.floor(Math.random() * winScore + 1)

  }
  
  const handelChange = (e) =>{
    setInputField(+e.target.value)
    
   
  }
 
  
  
  const handelSubmit = (e) =>{
   
    e.preventDefault();
     const displayMsg = 'please input valid number'
    if(inputValue === '' || inputValue < 1){
    setInputValue(displayMsg)
    
  //  toast.danger('please input valid number')
       
     
     
         
      
      
    }else{
      setWinScore(inputField)
      setInputField('')
       initialScore()

    }
 
  
  }
  const handelPlayerOne =() =>{
    setPlayerOneScore(generateNumber)
        //necessary state update
          setP1Turn(false)
          setP2Turn(true)
          checkWinnerState()
        
          
   
   
  }
  const checkWinnerState = () => {
    //you will get true or false result
    const isWinnerScoreReached = winScore === playerOneScore || winScore === playerTwoScore
//     //if winnerScore is Reached p1Turn and p2urn will be false 
    if(isWinnerScoreReached){
        setP1Turn(false)
        setP2Turn(false)
      
    }

    if(isWinnerScoreReached){
      setPlayerOneWinValue(true)
    }else if(isWinnerScoreReached){
      setPlayerTwoWinValue(true)
    }
  

}
 




  const handelPlayerTwo =() =>{
   setPlayerTwoScore(generateNumber)
        //necessary state update
          setP2Turn(false)
          setP1Turn(true)
          checkWinnerState()
       

  }
 
  
  
  const clearInput = () => {
    setWinScore(null)
    initialScore()
    
  }
  
  const initialScore =() =>{
    setInputField('')
    setPlayerOneScore(0)
    setPlayerTwoScore(0)
    
    setP1Turn(true)
    setP2Turn(true)
    setPlayerOneWinValue(false)
    setPlayerTwoWinValue(false)
  }

  return (
    <div className="App">
       <h1>Player Vs Player</h1>
     
       <Winner playerOneWinValue={playerOneWinValue} playerTwoWinValue={playerTwoWinValue} /> 
      
   
       <WinScore winScore={winScore} />
       <Player playerOneScore={playerOneScore} playerTwoScore={playerTwoScore}  />
      <form action=""onSubmit={handelSubmit} className="text-center">
            <input type="number" id="input" value={inputField} className='mt-4'onChange={handelChange}  />

            <button className="btn btn-secondary ms-2" >Submit</button>
            
            
            <div className="d-grid gap-2 mt-3 ">
            <Button variant="secondary" onClick={handelPlayerOne} disabled={!p1Turn}>Player1</Button>{' '}
            <Button variant="secondary" onClick={handelPlayerTwo} disabled={!p2Turn}>Player2</Button>{' '}
            <Button variant="secondary" onClick={clearInput}>Reset</Button>{' '}
            

        </div>
        </form>

    </div>
  );
}

export default App;
