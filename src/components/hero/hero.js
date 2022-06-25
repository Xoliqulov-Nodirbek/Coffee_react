import Button from "../button/button"

// ----> Scss
import "./hero.scss";

const Hero = () => {
    return (
        <section class="hero">
            <div class="hero__inner">
                <div class="hero__content">
                    <h1 class="hero__content--title">Great coffee made simple.</h1>
                    <p class="hero__content--text">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
                    <Button />
                </div>
            </div>
        </section>
    )
}

export default Hero;