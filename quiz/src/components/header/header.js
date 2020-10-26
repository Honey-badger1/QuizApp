import React, {useState} from 'react';
import GetInform from '../get-api/get-api'
const Question = ({question, id ,incorrect_answers,selected, classn}) => { 
    if (id){
        classn='';
    }
    const [answer, setAnswer] = useState(incorrect_answers); 
        return(
            <div key={id} className={classn}>
                 <h2>{question}</h2>
                 
                     <ul>{incorrect_answers.filter(function(item, pos) {
    return incorrect_answers.indexOf(item) == pos}).map((text, index) => ( 
         <li> <button 
              key={index} 
              className="answerBtn"
              onClick={()=>{ 
                setAnswer(); 
                selected(text); 
              }}
              
               >{text} 
         </button> </li>
        ))} 
                 </ul>
                

            </div>
        )
    }
    
  export default Question