
const Logo = ({ img }) => {
    return (
        <a href="https://google.com" className="header__logo">
            <img className="header__logo-img" src={ img } alt="site-logo" />
        </a>
    )
}

export default Logo;