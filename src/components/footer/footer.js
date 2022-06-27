import Facebook from "../facebook/facebook";
import Instagram from "../instagram/instagram";
import Logo from "../logo/logo";
import Nav from "../nav/nav";
import Twitter from "../twitter/twitter";

// ----> Scss
import "./footer.scss";

// ----> Icons
import LogoFooter from "../../assets/icons/footer.svg";

const Footer= () => {
    return (
        <div class="footer__inner">
            <Logo img={ LogoFooter } />
            <Nav />
            <ul class="footer__list">
                <Facebook />
                <Twitter />
                <Instagram />
            </ul>
        </div>
    )
}

export default Footer;