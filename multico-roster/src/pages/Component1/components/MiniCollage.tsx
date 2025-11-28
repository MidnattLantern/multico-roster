// In case of "blackout", disable:
// images[0] images[1] images[2]

import Styles from "../styles/MiniCollage.module.css";
import { MapCharacterImages } from "../../../assets/character-roster/MapCharacterImages";

const MiniCollage: React.FC<{
    currentCharacterID: number;
    currentCharacterName: string;
    currentColorTheme: string;
    currentAlignMiniCollageImageTop1: number;
    currentAlignMiniCollageImageLeft1: number;
    currentAlignMiniCollageImageTop2: number;
    currentAlignMiniCollageImageLeft2: number;
    currentAlignMiniCollageImageTop3: number;
    currentAlignMiniCollageImageLeft3: number;
}> = ({
    currentCharacterID,
    currentCharacterName,
    currentColorTheme,
    currentAlignMiniCollageImageTop1,
    currentAlignMiniCollageImageLeft1,
    currentAlignMiniCollageImageTop2,
    currentAlignMiniCollageImageLeft2,
    currentAlignMiniCollageImageTop3,
    currentAlignMiniCollageImageLeft3
}) => {
    
    const images = MapCharacterImages[currentCharacterName];

    const alignImage1 = {
        "top": `${currentAlignMiniCollageImageTop1}vw`, 
        "left": `${currentAlignMiniCollageImageLeft1}vw`
    };
    const alignImage2 = {
        "top": `${currentAlignMiniCollageImageTop2}vw`, 
        "left": `${currentAlignMiniCollageImageLeft2}vw`
    };
    const alignImage3 = {
        "top": `${currentAlignMiniCollageImageTop3}vw`, 
        "left": `${currentAlignMiniCollageImageLeft3}vw`
    };
    
    return(<>
    
        <div className={Styles.MiniCollageArray}>
            {currentCharacterID !== 0 ? (<>
                <div className={Styles.MiniCollageObject} style={{ backgroundColor: currentColorTheme}}>
                    <img className={`${Styles.MiniCollageImage} ${Styles.CannotInteract}`} style={alignImage1} src={images[0]} alt=""/>
                </div>
                <div className={Styles.MiniCollageObject} style={{ backgroundColor: currentColorTheme}}>
                    <img className={`${Styles.MiniCollageImage} ${Styles.CannotInteract}`} style={alignImage2} src={images[1]} alt=""/>
                </div>
                <div className={Styles.MiniCollageObject} style={{ backgroundColor: currentColorTheme}}>
                    <img className={`${Styles.MiniCollageImage} ${Styles.CannotInteract}`} style={alignImage3} src={images[2]} alt=""/>
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