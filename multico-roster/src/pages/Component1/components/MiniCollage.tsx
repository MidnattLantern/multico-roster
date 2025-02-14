import Styles from "./MiniCollage.module.css";
import { NicoletteImage1Alt } from "../../../assets/character-roster/nicolette/";
import { NicoletteImage2Alt } from "../../../assets/character-roster/nicolette/";
import { NicoletteImage3Alt } from "../../../assets/character-roster/nicolette/";

const MiniCollage = () => {
    return(<>
        <div className={Styles.MiniCollageArray}>
            <div className={Styles.MiniCollageObject}>
                <img className={`${Styles.MiniCollageImage} ${Styles.CannotInteract}`} src={NicoletteImage1Alt} alt="Nicolette 1"/>
            </div>
            <div className={Styles.MiniCollageObject}>
                <img className={`${Styles.MiniCollageImage} ${Styles.CannotInteract}`} src={NicoletteImage2Alt} alt="Nicolette 2"/>
            </div>
            <div className={Styles.MiniCollageObject}>
                <img className={`${Styles.MiniCollageImage} ${Styles.CannotInteract}`} src={NicoletteImage3Alt} alt="Nicolette 3"/>
            </div>
        </div>
    </>)
}

export default MiniCollage;