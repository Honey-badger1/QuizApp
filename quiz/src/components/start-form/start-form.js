import React, {Component} from 'react';
import './form.css';


const Form= ({classNames, closeModal})=>{

  
    return(
    <div className={classNames}>
    <h1>
        Do you want to start the Quiz?
    </h1>
    <button onClick={closeModal}>Yes</button>
    </div>
    )
}

export default Form;
