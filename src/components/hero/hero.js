import Button from "../button/button"

// ----> Scss
import "./hero.scss";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__inner">
                <div className="hero__content">
                    <h1 className="hero__content--title">Great coffee made simple.</h1>
                    <p className="hero__content--text">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                    <Button />
                </div>
            </div>
        </section>
    )
}

export default Hero;