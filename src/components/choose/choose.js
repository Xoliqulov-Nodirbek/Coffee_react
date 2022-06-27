import ChooseCard from "../chooseCard/chooseCard";

// ----> Scss
import "./choose.scss";

const Choose = () => {
    return (
        <section class="choose">
                <div class="choose__inner">

                    <div class="choose__content">
                        <h2 class="choose__content--title">Why choose us?</h2>
                        <p class="choose__content--text">A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
                    </div>

                    <div class="choose__cards card">
                        <ChooseCard 
                            newClass={"card__one"}
                            title={"Best quality"} 
                            text={"Discover an endless variety of the world’s best artisan coffee from each of our roasters."} 
                        />
                        <ChooseCard 
                            newClass={"card__two"}
                            title={"Exclusive benefits"} 
                            text={"Special offers and swag when you subscribe, including 30% off your first shipment."} 
                        />
                        <ChooseCard 
                            newClass={"card__three"}
                            title={"Free shipping"} 
                            text={"We cover the cost and coffee is delivered fast. Peak freshness: guaranteed."} 
                        />
                    </div>
                    
                </div>
            </section>
    )
}

export default Choose;