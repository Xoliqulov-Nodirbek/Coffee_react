
// ----> Scss
import "./facebook.scss";

// ----> Images
import FacebookIcon from "../../assets/icons/facebook.svg";

const Facebook = () => {
    return (
        <li className="footer__right--item">
            <a className="footer__right--link" href="https://google.com">
                <img className="footer__right--icon" src={ FacebookIcon } alt="facebook-icon" />
            </a>
        </li>
    )
}

export default Facebook;