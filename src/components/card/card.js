
// ----> Scss
import "./card.scss";

// ----> Images

const Card = ({ img, title, text }) => {
    return (
        <li class="collection__card">
            <img class="collection__card--img" src={ img } alt="gran expresso" />
            <div class="collection__card--content">
                <h3 class="collection__card--title">{ title }</h3>
                <p class="collection__card--text">{ text }</p>
            </div>
        </li>
    )
}

export default Card;