
// ----> Scss
import "./chooseCard.scss";

const ChooseCard = ({ title, text }) => {
    return (
        <div class="card__one">
            <div class="card__one--content">
                <h3 class="card__one--title">{ title }</h3>
                <p class="card__one--text">{ text }</p>
            </div>
        </div> 
    )
}

export default ChooseCard;