import Styles from "./Component1.module.css";
import { NicoletteImage1Alt } from "../../assets/character-roster/nicolette/";
import { NicoletteImage2Alt } from "../../assets/character-roster/nicolette/";
import { NicoletteImage3Alt } from "../../assets/character-roster/nicolette/";
import { CornerDecorators, ThirdsCrossDecorator, ColorPalette, NameTitle, MiniCollage, ContinueButton, DisplayCharacter, NameTitleBackgroundDecorator } from "./components";

const Component1 = () => {

    return(<>
        <div className={Styles.Component1Foundation}>
            <CornerDecorators />
            <ColorPalette />
            <ThirdsCrossDecorator />

            <div className={Styles.LeftSection}>
                <MiniCollage />
                <NameTitleBackgroundDecorator />
            </div>
            <div className={Styles.CentreSection}>
                <DisplayCharacter />
            </div>
            <div className={Styles.RightSection}>
                <NameTitle />
                <ContinueButton />
            </div>

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

        </div>
    </>)
}

export default Component1