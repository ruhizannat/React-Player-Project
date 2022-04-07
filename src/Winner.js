const Winner = ({playerOneWinValue, playerTwoWinValue}) =>{
    let displayWinner;

  if (playerOneWinValue) {
    displayWinner = "Player One Winner";
  } else if (playerTwoWinValue) {
    displayWinner = "Player Two Winner";
  }
    
  

    return(
        <div className="mt-3">
      <p>{displayWinner}</p>
    </div>
      
    )
}
export default Winner