
// ----> Scss
import "./nav.scss";

const Nav = () => {
    return (
        <nav className="header__nav">
            <ul className="header__nav--list">
                <li className="header__nav--item"><a className="header__nav--link" href="https://google.com">HOME</a></li>
                <li className="header__nav--item"><a className="header__nav--link" href="https://google.com">ABOUT US</a></li>
                <li className="header__nav--item"><a className="header__nav--link" href="https://google.com">CREATE YOUR PLAN</a></li>
            </ul>
        </nav>
    )
}

export default Nav;