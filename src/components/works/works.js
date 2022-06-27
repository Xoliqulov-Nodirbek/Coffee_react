import WorksCard from "../worksCard/worksCard";
import Button from "../button/button";

// ----> Scss
import "./works.scss";

// ----> Images
import CardImg1 from "../../assets/images/01.png";
import CardImg2 from "../../assets/images/02.png";
import CardImg3 from "../../assets/images/03.png";

const Works = () => {
    return (
        <section class="works">
            <div class="works__inner">

                <div class="works__title">
                        <h3 class="works__title--text">How it works</h3>
                </div>

                <div class="works__line">
                    <div class="round"></div>
                    <span class="line"></span>
                    <div class="round"></div>
                    <span class="line"></span>
                    <div class="round"></div>
                </div>
                    
                <div class="works__cards">

                    <WorksCard
                        img={ CardImg1 }
                        title={` Pick your coffee `}
                        text={"Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out."}
                    />            
                    <WorksCard
                        img={ CardImg2 }
                        title={` Choose the frequency `}
                        text={"Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal."}
                    />            
                    <WorksCard
                        img={ CardImg3 }
                        title={` Receive and enjoy! `}
                        text={"We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience."}
                    />         

                </div>
               
                <Button />

            </div>
        </section>
    )
}

export default Works;