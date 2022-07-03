
// ----> Scss
import "./twitter.scss";

// ----> Images
import TwitterIcon from "../../assets/icons/twitter.svg";

const Twitter = () => {
    return (
        <li className="footer__right--item">
            <a className="footer__right--link" href="htpps://google.com">
                <img className="footer__right--icon" src={ TwitterIcon } alt="facebook-icon" />
            </a>
        </li>
    )
}

export default Twitter;