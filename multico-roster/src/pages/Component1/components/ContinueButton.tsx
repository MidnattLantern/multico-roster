import ContinueButtonArrow from "../../../assets/vector-graphics/ContinueButtonArrow.svg?react";
import Styles from "../styles/ContinueButton.module.css";

const ContinuteButton: React.FC<{
    currentCharacterID: number;
    currentCharacterName: string;
    setShowCharacterInfoPanel: React.Dispatch<React.SetStateAction<boolean>>
}> = ({
    currentCharacterID,
    currentCharacterName,
    setShowCharacterInfoPanel
}) => {

    function capitalizeFirstLetter(val: string) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    };

    return(<>
    <div className={Styles.ContinuteButtonComponent}>
        <div className={Styles.ContinuteButtonBorder}>
            {currentCharacterID !== 0 ? (<>
                <button className={Styles.ContinuteButtonStyle} onClick={() => {setShowCharacterInfoPanel(true)}}>
                    {`Read about ${capitalizeFirstLetter(currentCharacterName)}`}
                    <ContinueButtonArrow className={Styles.ContinuteButtonArrow}/>
                </button>
            </>) : (<>
                <h1 className={`${Styles.CannotInteract} ${Styles.Unselected}`}>Pick a character</h1>
            </>)}
        </div>
    </div>
    </>)
}

export default ContinuteButton;
