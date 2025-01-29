import { NicoletteImage1, NicoletteImage2, NicoletteImage3 } from "../../assets/character-roster/nicolette";
import Styles from "./Nicolette.module.css";

const Nicolette = () => {

    return(<>
        <div>
            <img className={Styles.ImageSize} src={NicoletteImage1} alt="Nicolette 1"/>
            <img className={Styles.ImageSize} src={NicoletteImage2} alt="Nicolette 2"/>
            <img className={Styles.ImageSize} src={NicoletteImage3} alt="Nicolette 3"/>
        </div>
    </>)
};

export default Nicolette