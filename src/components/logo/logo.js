
const Logo = ({ img }) => {
    return (
        <a href="#" className="header__logo">
            <img className="header__logo-img" src={ img } alt="site-logo" />
        </a>
    )
}

export default Logo;