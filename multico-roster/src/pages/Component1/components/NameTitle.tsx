import Styles from "../styles/NameTitle.module.css";

const NameTitle: React.FC<{
    currentCharacterName: string, currentCharacterSubtext: string
}> = ({
    currentCharacterName, currentCharacterSubtext
}) => {
    return(<>
        <div className={`${Styles.NameTitleComponent} ${Styles.CannotInteract}`}>
            <h1 className={Styles.NameTitleHeader}>{currentCharacterName}</h1>
            <p className={Styles.NameTitleSubText}>{currentCharacterSubtext}</p>
        </div>
    </>)
};

export default NameTitle;