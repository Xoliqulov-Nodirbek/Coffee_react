
// ----> Icons
import LogoSvg from "../../assets/icons/logo.svg";

const Logo = () => {
    return (
        <a href="#" className="header__logo">
            <img className="header__logo-img" src={LogoSvg} alt="site-logo" />
        </a>
    )
}

export default Logo;