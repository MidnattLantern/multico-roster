import Styles from "../styles/ColorPalette.module.css";

const ColorPalette: React.FC<{
    currentColorPrimary: string,
    currentColorSecondary: string
    currentColorAccent: string
    currentColorTheme: string
}> = ({
    currentColorPrimary,
    currentColorSecondary,
    currentColorAccent,
    currentColorTheme
}) => {

    return(<>
        <div className={Styles.ColorPaletteArray}>
            <svg className={`${Styles.ColorPaletteObject}`} style={{ backgroundColor: currentColorPrimary}} />
            <svg className={`${Styles.ColorPaletteObject}`} style={{ backgroundColor: currentColorSecondary}} />
            <svg className={`${Styles.ColorPaletteObject}`} style={{ backgroundColor: currentColorAccent}} />
            <svg className={`${Styles.ColorPaletteObject}`} style={{ backgroundColor: currentColorTheme}} />
        </div>
    </>)
};

export default ColorPalette;