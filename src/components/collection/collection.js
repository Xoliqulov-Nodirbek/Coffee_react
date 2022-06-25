import Card from "../card/card";

// ----> Scss
import "./collection.scss";

// ----> Images
import Image1 from "../../assets/images/kopi1.png";
import Image2 from "../../assets/images/kopi2.png";
import Image3 from "../../assets/images/kopi3.png";
import Image4 from "../../assets/images/kopi4.png";

const Collection = () => {
    return (
        <section class="collection">
                <div class="collection__inner">
                    <ul class="collection__list">
                        <Card 
                            img={Image1}
                            title={"Gran Espresso"} 
                            text={"Light and flavorful blend with cocoa and black pepper for an intense experience."}
                        />
                        <Card 
                            img={Image2}
                            title={"Planalto"}
                            text={"Brazilian dark roast with rich and velvety body, and hints of fruits and nuts."}
                        />
                        <Card 
                            img={Image3}
                            title={"Piccollo"}
                            text={"Mild and smooth blend featuring notes of toasted almond and dried cherry."}
                        />
                        <Card 
                            img={Image4}
                            title={"Danche"}
                            text={"Ethiopian hand-harvested blend densely packed with vibrant fruit notes."}
                        />
                    </ul>
                </div>
            </section>
    )
}

export default Collection;