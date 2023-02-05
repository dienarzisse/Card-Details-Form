import './styling/css/Button.css'

function Button({children, className,  ...rest}){
    return(
        <button className={ className } {...rest}>
            { children }
        </button>
    );
}

export default Button;