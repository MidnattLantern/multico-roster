import { NicoletteImage1Alt } from "../../../assets/character-roster/nicolette/";
import { NicoletteImage2Alt } from "../../../assets/character-roster/nicolette/";
import { NicoletteImage3Alt } from "../../../assets/character-roster/nicolette/";
import Styles from "./CharacterList.module.css";

const CharacterList = () => {
    return(<>
        <div className={Styles.CharacterListFoundation}>
            <div className={`${Styles.CharacterItem} ${Styles.CharacterItemSelected}`}>
                <img className={`${Styles.CharacterItemImageSize} ${Styles.CannotInteract}`} src={NicoletteImage1Alt} alt="Nicolette 1"/>
            </div>
            <div className={Styles.CharacterItem}>
                <img className={`${Styles.CharacterItemImageSize} ${Styles.CannotInteract}`} src={NicoletteImage2Alt} alt="Nicolette 2"/>
            </div>
            <div className={Styles.CharacterItem}>
                <img className={`${Styles.CharacterItemImageSize} ${Styles.CannotInteract}`} src={NicoletteImage3Alt} alt="Nicolette 3"/>
            </div>
        </div>
    </>)
};

export default CharacterList;