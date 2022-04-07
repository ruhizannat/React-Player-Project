const Player =({playerOneScore, playerTwoScore}) =>{
  
    return(
        
        <div>
            <p className="p">
            player-1: <span className="p1Score">{playerOneScore}</span> <br />
            player-2: <span className="p2Score">{playerTwoScore}</span>
           </p>
      
        </div>
    )
}
export default Player