import CompletedIcon from './images/icon-complete.svg';
import Button from './Button';
import './styling/css/ThankYou.css';

function ThankYou(){
    return(
        <div className="ThankYou">
            <img src={CompletedIcon} alt={"completed"}></img>
            <h1>Thank You!</h1>
            <p>We’ve added your card details</p>
            <Button>Continue</Button>
        </div>
    );
}

export default ThankYou;