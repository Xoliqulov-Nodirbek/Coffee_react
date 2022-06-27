

// ----> Scss
import "./worksCard.scss";

const WorksCard = ({ img, title, text }) => {
    return (
        <div className="works__card">
            <img className="works__card--img" src={ img } alt="Pick your coffee" />
            <div className="works__content">
                <h2 className="works__content--title">{ title }</h2>
                <p className="works__content--text">{ text }</p>
            </div>
        </div>
    )
}

export default WorksCard;