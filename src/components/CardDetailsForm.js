import './styling/css/CardDetails.css';
import Button from './Button.js'; 

function CardDetails({handleFlip, cardHolder, cardNumber, 
    expMonth, expYear, cvc, completed,
    setCardHolder, setCardNumber, setExpMonth, setExpYear, setCVC, setCompleted}){

    // event handlers

    const handleNameChange = (event) =>{
        setCardHolder(event.target.value);
    }

    const handleNumberChange = (event) =>{
        setCardNumber(event.target.value);
    }

    const handleMonthChange = (event) =>{
        let month = event.target.value;
        month = month.split("").map((char) =>{ return char.match(/[0-9]/i) ? char:"" }).join("");
        if(month > 12)
            month = `0${ month % 10 }`;
        if( ~~month === 0 && month.length > 1)
            month = "0";
        if(month[0] === '0' && month.length > 2)
            month = `${month[1]}${month[2]}`
        if(month.length === 1)
            month = `0${month[0]}`
        setExpMonth(month);
    }

    const handleYearChange = (event) =>{
        let year = event.target.value;
        year = year.split("").map((char) =>{ return char.match(/[0-9]/i) ? char:"" }).join("");
        if(year > 99)
            year = `0${ year % 10 }`;
        if( ~~year === 0 && year.length > 1)
            year = "0";
        if(year[0] === '0' && year.length > 2)
            year = `${year[1]}${year[2]}`
        if(year.length === 1)
            year = `0${year[0]}`
        setExpYear(year);
    }

    const handleCVCChange = (event) =>{
        let cvc = event.target.value;
        cvc = cvc.split("").map((char) =>{ return char.match(/[0-9]/i) ? char:"" }).join("");
        if(cvc.length > 4)
            cvc = cvc.slice(0,4);
        setCVC(cvc);
    }


    const handleClick = () => {
        if(cardHolder.length > 0 && cardNumber.length > 16 && expMonth.length > 1 && expYear.length > 1 && cvc.length > 2)
            setCompleted(true);
    }

    return(
        <div className="CardDetails">
            <form>
                <div className="col">
                    <label for="cname">Name on Card</label>
                    <input className="holder-name" value={ cardHolder } onChange={ handleNameChange }
                    type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
                </div>
                <div className="col">
                <label for="ccnum">Credit card number</label>
                <input className="card-number" value={ cardNumber } onChange={ handleNumberChange }
                type="text" id="ccnum" name="cardnumber" placeholder="DE1111-2222-3333-4444"></input>
                </div>
                               
                <div class="row">
                    <div class="col">
                        <label for="expyear">Exp Date(MM/YY)</label>
                        <div className="row">
                        <input className="exp-month" value={ expMonth } onChange={ handleMonthChange }
                        type="number" min="1" max="12" id="expmonth" name="expmonth" placeholder="07"></input>
                        <input className="exp-year" value={ expYear } onChange={ handleYearChange }
                        type="text" min="0" max="99" id="expyear" name="expyear" placeholder="24"></input>
                        </div>
                    </div>
                    <div class="col">
                        <label for="cvv">CVC</label>
                        <input className="cvc" value={ cvc } onChange={ handleCVCChange }
                        onFocus={() => handleFlip(true)} onBlur={() => handleFlip(false)} type="text" id="cvv" name="cvv" placeholder="352"></input>
                    </div>
                </div>
            </form>
            <Button className="button" onClick={handleClick}>Confirm</Button>
        </div>
    );
}

export default CardDetails;