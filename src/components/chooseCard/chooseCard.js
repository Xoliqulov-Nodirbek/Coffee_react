
// ----> Scss
import "./chooseCard.scss";

const ChooseCard = ({ title, text, newClass }) => {
    return (
        <div className={`card__one ${newClass}`}>
            <div className="card__one--content">
                <h3 className="card__one--title">{ title }</h3>
                <p className="card__one--text">{ text }</p>
            </div>
        </div> 
    )
}

export default ChooseCard;