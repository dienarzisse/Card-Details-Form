import CardFront from './CardFront';
import CardBack from './CardBack';
import './styling/css/Card.css';
import CardBackgroundMobile from './images/bg-main-mobile.png';
import CardBackgroundDesktop from './images/bg-main-desktop.png';

function Card({CardNumber, CardHolder, ExpMonth, ExpYear, CVC, Flipped, setFlipped }){

    return(
        <div className="Card" style={{  
            backgroundImage: `url(${ CardBackgroundMobile })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div className={`CardInner ${ Flipped ? "Flipped":"Unflipper"}`}>
                <CardFront CardNumber={ CardNumber } CardHolder={ CardHolder } ExpMonth={ ExpMonth } ExpYear={ ExpYear } Flipped={ Flipped }/>
                <CardBack  CVC={ CVC } Flipped={Flipped}/>
            </div>
        </div>
    );
}

export default Card;