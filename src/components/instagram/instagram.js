
// ----> Scss
import "./instagram.scss";

// ----> Images
import InstagramIcon from "../../assets/icons/instagram.svg";

const Instagram = () => {
    return (
        <li className="footer__right--item">
            <a className="footer__right--link" href="#">
                <img className="footer__right--icon" src={ InstagramIcon } alt="facebook-icon" />
            </a>
        </li>
    )
}

export default Instagram;