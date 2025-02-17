import Styles from "../styles/CharacterInfoPanel.module.css";


const CharacterInfoPanel: React.FC<{
    currentCharacterName: string,
    currentCharacterSubtext: string,
    setShowCharacterInfoPanel: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
    currentCharacterName, currentCharacterSubtext, setShowCharacterInfoPanel
}) => {

    return(<>
        <div className={Styles.CharacterInfoPanelFoundation}>
            <h1 className={`${Styles.NameTitle} ${Styles.CannotInteract}`}>{currentCharacterName}</h1>
            <p className={`${Styles.Subtext} ${Styles.CannotInteract}`}>{currentCharacterSubtext}</p>
            <p className={`${Styles.Subtext} ${Styles.CannotInteract}`}>More content comming soon...</p>
            <div className={Styles.CloseButtonBorder}>
                <button className={Styles.CloseButton} onClick={() => {setShowCharacterInfoPanel(false)}}>Close</button>
            </div>
        </div>
    </>)
};

export default CharacterInfoPanel;