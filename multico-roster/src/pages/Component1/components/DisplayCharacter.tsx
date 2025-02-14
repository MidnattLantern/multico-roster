// In case of "blackout", disable:
// images[0]

import { MapCharacterImages } from "../../../assets/character-roster/MapCharacterImages";
import Styles from "../styles/DisplayCharacter.module.css";

const DisplayCharacter: React.FC<{
    currentCharacterID: number;
    currentCharacterName: string;
}> = ({
    currentCharacterID,
    currentCharacterName
}) => {

    const images = MapCharacterImages[currentCharacterName];

    return(<>
        {currentCharacterID !== 0 ? (<>
            <img className={`${Styles.ImageSize} ${Styles.CannotInteract} ${Styles.ImageShadow}`} src={images[0]} alt="Display Character"/>
        </>) : (<>
        
        </>)}

    </>)
};

export default DisplayCharacter;