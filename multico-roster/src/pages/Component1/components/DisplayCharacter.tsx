import { NicoletteImage1Alt } from "../../../assets/character-roster/nicolette/";
import Styles from "./DisplayCharacter.module.css";

const DisplayCharacter = () => {
    return(<>
        <img className={`${Styles.ImageSize} ${Styles.CannotInteract} ${Styles.ImageShadow}`} src={NicoletteImage1Alt} alt="Nicolette 1"/>
    </>)
};

export default DisplayCharacter;