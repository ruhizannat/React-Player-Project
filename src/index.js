import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// const [p1Turn, setP1Turn] = useState(true)
// const [p2Turn, setP2Turn] = useState(true)

// const handlePlayerOne = () => {
//     //necessary state update
//     //setP1Turn(false)
//     //setP2Turn(true)
//     //checkWinnerState()

// }
// const checkWinnerState = () => {
//      //you will get true or false result
//     const isWinnerScoreReached = winnerScore === p1Score || winnerScore === p2Score
//     //if winnerScore is Reached p1Turn and p2urn will be false 
//     if(winnerScore){
//         setP1Turn(false)
//         setP2Turn(false)
//     }
// }

// const handlePlayerTwo = () => {
//     //necessary state update
//     //setP2Turn(false)
//     //setP1Turn(true)
//     //checkWinnerState()
// }


// return(
// ....
// //player 1
// <button .. disabled={!p1Turn} /> 

// //player 2
// <button .. disabled={!p2Turn} /> 
// ....
// )
