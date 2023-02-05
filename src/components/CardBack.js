import "./styling/css/CardBack.css"
import CardBackBackground from './images/bg-card-back.png';

function CardBack({CVC, Flipped}){
    return(
        <div className={`CardBack`} style={{  
            backgroundImage: `url(${ CardBackBackground })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
            <div className="cvc">{ CVC }</div>
        </div>
    );
}

export default CardBack;