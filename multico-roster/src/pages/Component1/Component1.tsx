import Styles from "./Component1.module.css";
import { NicoletteImage1Alt } from "../../assets/character-roster/nicolette/";
import { NicoletteImage2Alt } from "../../assets/character-roster/nicolette/";
import { NicoletteImage3Alt } from "../../assets/character-roster/nicolette/";
import TopLeftCorner from "../../assets/vector-graphics/TopLeftCorner.svg?react";
import BottomLeftCorner from "../../assets/vector-graphics/BottomLeftCorner.svg?react";
import BottomRightCorner from "../../assets/vector-graphics/BottomRightCorner.svg?react";
import CirclesDecorator from "../../assets/vector-graphics/CirclesDecorator.svg?react";

const Component1 = () => {

    const CornerDecorators = () => {
        return(<>
            <div className={Styles.AlignTopLeftCorner}>
                <TopLeftCorner className={Styles.CornerAppearance} />
            </div>
            <div className={Styles.AlignBottomLeftCorner}>
                <BottomLeftCorner className={Styles.CornerAppearance} />
            </div>
            <div className={Styles.AlignBottomRightCorner}>
                <BottomRightCorner className={Styles.CornerAppearance} />
            </div>
            <div className={Styles.AlignCirclesDecorator}>
                <CirclesDecorator className={Styles.CirclesDecoratorAppearace}/>
            </div>
        </>)
    }

    /*
    const ColorPalette = () => {
        return(<>
            <div className={Styles.ColorPaletteArray}>
                <svg className={Styles.ColorPaletteObject}/>
                <svg className={Styles.ColorPaletteObject}/>
                <svg className={Styles.ColorPaletteObject}/>
                <svg className={Styles.ColorPaletteObject}/>
            </div>
        </>)
    }
    */

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

    const NameTitle = () => {
        return(<>
            <div className={`${Styles.NameTitleComponent} ${Styles.CannotInteract}`}>
                <h1 className={Styles.NameTitleHeader}>NICOLETTE</h1>
                <p className={Styles.NameTitleSubText}>Subtext for Nicolette</p>
            </div>
        </>)
    }

    const ContinuteButton = () => {
        return(<>
        <div className={Styles.ContinuteButtonComponent}>
            <div className={Styles.ContinuteButtonBorder}>
                <button className={Styles.ContinuteButtonStyle}>
                    Read about Nicolette
                </button>
            </div>
        </div>
        </>)
    }

    const DisplayCharacter = () => {
        return(<>
            <img className={`${Styles.ImageSize} ${Styles.CannotInteract} ${Styles.ImageShadow}`} src={NicoletteImage1Alt} alt="Nicolette 1"/>
        </>)
    }

    const NameTitleBackgroundDecorator = () => {
        return(<>
            <svg className={`${Styles.NameTitleBackgroundDecoratorComponent} ${Styles.CannotInteract}`}>
                <text x="0" y="90%" className={Styles.NameTitleBackgroundDecoratorText}>
                    NICOLETTE NICOLETTE
                </text>
            </svg>
        </>)
    }

    return(<>
        <div className={Styles.Component1Foundation}>
            <CornerDecorators />
            <div className={Styles.LeftSection}>
                <MiniCollage />
                <NameTitleBackgroundDecorator />
            </div>
            <div className={Styles.CentreSection}>
                <DisplayCharacter />
            </div>
            <div className={Styles.RightSection}>
                <NameTitle />
                <ContinuteButton />
            </div>

            <div className={Styles.CharacterListFoundation}>
                <div className={Styles.CharacterItem}>
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