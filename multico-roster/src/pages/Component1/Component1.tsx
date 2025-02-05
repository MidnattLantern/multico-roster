import Styles from "./Component1.module.css";
import { NicoletteImage1Alt } from "../../assets/character-roster/nicolette/";

const Component1 = () => {

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

    const MiniCollage = () => {
        return(<>
            <div className={Styles.MiniCollageArray}>
                <svg className={Styles.MiniCollageObject}/>
                <svg className={Styles.MiniCollageObject}/>
                <svg className={Styles.MiniCollageObject}/>
            </div>
        </>)
    }

    const NameTitle = () => {
        return(<>
            <div className={Styles.NameTitleComponent}>
                <h1 className={Styles.NameTitleHeader}>NICOLETTE</h1>
                <p className={Styles.NameTitleSubText}>very saucy</p>
            </div>
        </>)
    }

    const ContinuteButton = () => {
        return(<>
        <div className={Styles.ContinuteButtonComponent}>
            <button className={Styles.ContinuteButtonStyle}>
                Read about Nicolette
            </button>
        </div>
        </>)
    }

    const DisplayCharacter = () => {
        return(<>
            <img className={Styles.ImageSize} src={NicoletteImage1Alt} alt="Nicolette 1"/>
        </>)
    }

    const NameTitleBackgroundDecorator = () => {
        return(<>
            <svg width="300%" height="30%">
                <text x="0" y="200" font-size="220" stroke="var(--dark)" stroke-width="1" fill="transparent">
                    NICOLETTE
                </text>
            </svg>
        </>)
    }

    return(<>
        <div className={Styles.Component1Foundation}>
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
        </div>
    </>)
}

export default Component1