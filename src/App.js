import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import CardDetails from './components/CardDetailsForm';
import ThankYou from './components/ThankYou';

function App() {
  const [flipped, setFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const[cardHolder, setCardHolder] = useState("");
  const[expMonth, setExpMonth] = useState("");
  const[expYear, setExpYear] = useState("");
  const[cvc, setcvc] = useState("");

  // event handlers
  const handleComplete = () =>{
    setCompleted(true);
  }

  const handleFlip = (isFlipped) =>{
    setFlipped(isFlipped);
  }


  return (
    <div className="App">
     
        <Card CardNumber={ cardNumber } CardHolder={ cardHolder } ExpMonth={ expMonth } ExpYear={ expYear } CVC={ cvc } Flipped={ flipped } setFlipped={ setFlipped }/>
      
      <div className="FormWrapper">
       {!completed && <CardDetails handleComplete={ handleComplete } handleFlip={ handleFlip }
        cardHolder={ cardHolder } setCardHolder={ setCardHolder } 
        cardNumber={ cardNumber } setCardNumber={ setCardNumber }
        expMonth={ expMonth } setExpMonth={ setExpMonth }
        expYear={ expYear } setExpYear={ setExpYear }
        cvc={ cvc } setCVC={ setcvc }
        completed={ completed } setCompleted={ setCompleted }
        /> }
        { completed && <ThankYou />}
      </div>
    </div>
  );
}

export default App;
