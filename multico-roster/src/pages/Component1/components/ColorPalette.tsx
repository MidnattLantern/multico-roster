import Styles from "./ColorPalette.module.css";

const ColorPalette = () => {
    return(<>
        <div className={Styles.ColorPaletteArray}>
            <svg className={`${Styles.ColorPaletteObject} ${Styles.ColorPalettePrimary}`} />
            <svg className={`${Styles.ColorPaletteObject} ${Styles.ColorPaletteSecondary}`} />
            <svg className={`${Styles.ColorPaletteObject} ${Styles.ColorPaletteAccent}`} />
            <svg className={`${Styles.ColorPaletteObject} ${Styles.ColorPaletteTheme}`} />
        </div>
    </>)
};

export default ColorPalette;