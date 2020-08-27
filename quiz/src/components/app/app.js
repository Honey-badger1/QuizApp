import React, {
  Component
} from 'react';
import Form from '../start-form';
import GetInform from '../get-api/get-api'
import Question from '../header';
import Result from '../result';
import './app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      score: 0,
      responses: 0,
      isClose:false,
      
    };

  }
  GetInform = new GetInform();
  askQuestion = () => {

    this.GetInform.getQuestion().then(question => {
      this.setState({
        questionBank: question.results
      });
    });

  }

  cons=()=>{
   
    console.log(this.state.questionBank)
  }

  compareAnswer = (answer, correctAns) => {
    if (answer === correctAns) {
      this.setState({
        score: this.state.score + 1
      });

    }
    this.setState({ 
      responses: this.state.responses < 10
        ? this.state.responses + 1 
        : 5 
    }); 

  }


  playAgain = () => { 
    this.askQuestion();
    this.setState({score: 0, responses: 0}); 
  }; 

  componentDidMount() {
    
    this.askQuestion();
  }
  closeModal = () => {
      this.setState({ isClose: true });
    }


  render() {
    let {questionBank, isClose, score, responses} = this.state;
      for (let i = 0; i < questionBank.length; i++) {
        questionBank[i].id=i;}
 
    let classNames='form-start';
    let app='app',
    hiden='isClose';

    if(isClose){
            classNames+=' isClose';
            app+=' show';
            
            
        } 
    const questions=questionBank.map((item)=>{

   
      item.incorrect_answers=item.incorrect_answers.concat(item.correct_answer);})
    return ( 
     <>
     
     <Form  classNames={classNames} closeModal={this.closeModal}/>
    
      <div className={app}>
      
      <h1 >Quiz</h1> 
      <div className="score"> Your score is {score} / {questionBank.length}</div>
      {questionBank.map(({question, incorrect_answers, 
       correct_answer, id}) => <Question question= 
       {question} incorrect_answers={incorrect_answers} key={id} 
       selected={answer => this.compareAnswer(answer, correct_answer)} classn={(id==responses)? '':hiden}/>)} 
      <Result playAgain={this.playAgain} classNames={(responses==questionBank.length)? '':hiden}/>
      </div>
      </>
    )
  }
}