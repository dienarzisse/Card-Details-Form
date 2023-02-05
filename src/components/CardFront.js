import './styling/css/CardFront.css';
import CardFrontBackground from './images/bg-card-front.png';
import CardLogo from './images/card-logo.svg';

function CardFront({CardNumber, CardHolder, ExpMonth, ExpYear, Flipped}){
    return(
        <div className={`CardFront ${ Flipped ? "FrontFlipped":"BackFlipped" }`} style={{  
            backgroundImage: `url(${ CardFrontBackground })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
            <img src={ CardLogo }  alt="card logo" className="CardLogo" />
            <div className="CardNumber">
                { CardNumber }
            </div>
            <div className="holder-expdate">
                <div className="CardHolder">
                    { CardHolder }
                </div>
                <div className="EXPDate">
                    {ExpMonth}/{ExpYear}
                </div>
            </div>
            
        </div>
    );
}

export default CardFront;