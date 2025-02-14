// In case of "blackout", disable:
// images[0] images[1] images[2]

import Styles from "../styles/MiniCollage.module.css";
import { MapCharacterImages } from "../../../assets/character-roster/MapCharacterImages";

const MiniCollage: React.FC<{
    currentCharacterID: number;
    currentCharacterName: string;
}> = ({
    currentCharacterID,
    currentCharacterName
}) => {
    
    const images = MapCharacterImages[currentCharacterName];
    
    return(<>
    
        <div className={Styles.MiniCollageArray}>
            {currentCharacterID !== 0 ? (<>
                <div className={Styles.MiniCollageObject}>
                    <img className={`${Styles.MiniCollageImage} ${Styles.CannotInteract}`} src={images[0]} alt="Nicolette 1"/>
                </div>
                <div className={Styles.MiniCollageObject}>
                    <img className={`${Styles.MiniCollageImage} ${Styles.CannotInteract}`} src={images[1]} alt="Nicolette 2"/>
                </div>
                <div className={Styles.MiniCollageObject}>
                    <img className={`${Styles.MiniCollageImage} ${Styles.CannotInteract}`} src={images[2]} alt="Nicolette 3"/>
                </div>
            </>) : (<>
                <div className={Styles.MiniCollageObject} />
                <div className={Styles.MiniCollageObject} />
                <div className={Styles.MiniCollageObject} />
            </>)}
        </div>
    </>)
}

export default MiniCollage;