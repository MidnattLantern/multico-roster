import Styles from "./Component1.module.css";
import { NicoletteImage1Alt } from "../../assets/character-roster/nicolette/";
import { NicoletteImage2Alt } from "../../assets/character-roster/nicolette/";
import { NicoletteImage3Alt } from "../../assets/character-roster/nicolette/";
import TopLeftCorner from "../../assets/vector-graphics/TopLeftCorner.svg?react";
import BottomLeftCorner from "../../assets/vector-graphics/BottomLeftCorner.svg?react";
import BottomRightCorner from "../../assets/vector-graphics/BottomRightCorner.svg?react";
import CirclesDecorator from "../../assets/vector-graphics/CirclesDecorator.svg?react";
import ContinueButtonArrow from "../../assets/vector-graphics/ContinueButtonArrow.svg?react";

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

    const ThirdsCrossDecorators = () => {
        const Cross = () => {
            return(<>
                <line x1="0vw" y1="1vw" x2="2vw" y2="1vw" className={Styles.ThirdsCrossDecorator} />
                <line x1="1vw" y1="0vw" x2="1vw" y2="2vw" className={Styles.ThirdsCrossDecorator} />
            </>)
        }
        return(<>
            {/*
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement1}>
                <Cross />
            </svg>
            */}
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement2}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement3}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement4}>
                <Cross />
            </svg>

            {/*
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement5}>
                <Cross />
            </svg>
            */}
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement6}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement7}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement8}>
                <Cross />
            </svg>

            {/*
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement9}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement10}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement11}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement12}>
                <Cross />
            </svg>
            */}

            {/*
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement13}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement14}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement15}>
                <Cross />
            </svg>
            <svg width={"2vw"} height={"2vw"} className={Styles.ThirdsCrossPlacement16}>
                <Cross />
            </svg>
            */}
        </>)
    }

    const ColorPalette = () => {
        return(<>
            <div className={Styles.ColorPaletteArray}>
                <svg className={`${Styles.ColorPaletteObject} ${Styles.ColorPalettePrimary}`} />
                <svg className={`${Styles.ColorPaletteObject} ${Styles.ColorPaletteSecondary}`} />
                <svg className={`${Styles.ColorPaletteObject} ${Styles.ColorPaletteAccent}`} />
                <svg className={`${Styles.ColorPaletteObject} ${Styles.ColorPaletteTheme}`} />
            </div>
        </>)
    }

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
                <h1 className={Styles.NameTitleHeader}>{"NICOLETTE"}</h1>
                <p className={Styles.NameTitleSubText}>{"Street rat victim of a terrible fate"}</p>
            </div>
        </>)
    }

    const ContinuteButton = () => {
        return(<>
        <div className={Styles.ContinuteButtonComponent}>
            <div className={Styles.ContinuteButtonBorder}>
                <button className={Styles.ContinuteButtonStyle}>
                    {"Read about Nicolette"}
                    <ContinueButtonArrow className={Styles.ContinuteButtonArrow}/>
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
            <ColorPalette />
            <ThirdsCrossDecorators />

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