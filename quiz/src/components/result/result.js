import React from 'react';


const Result = ({playAgain, classNames}) => {
    return(
    <div className={classNames}> 
      <button className="playBtn" onClick={playAgain} > Play Again </button> 
    </div> 
  ) 
}    
  export default Result; 