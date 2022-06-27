
// ----> Scss
import "./card.scss";

// ----> Images

const Card = ({ img, title, text }) => {
    return (
        <li className="collection__card">
            <img className="collection__card--img" src={ img } alt="gran expresso" />
            <div className="collection__card--content">
                <h3 className="collection__card--title">{ title }</h3>
                <p className="collection__card--text">{ text }</p>
            </div>
        </li>
    )
}

export default Card;