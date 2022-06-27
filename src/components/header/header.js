import Nav from "../nav/nav";
import Logo from "../logo/logo";

// ----> Scss
import "./header.scss";

// ----> Icons
import List from "../../assets/icons/list.svg";
import LogoSvg from "../../assets/icons/logo.svg";

const Header = () => {
    return (                
        <div className="header__inner">
            <Logo img={ LogoSvg } />
            <Nav />
            <button className="header__menu" type="button">
                <img className="header__menu--img" src={List} alt="header icon list" width={18} height={15} />
            </button>
        </div>            
    )
}

export default Header;