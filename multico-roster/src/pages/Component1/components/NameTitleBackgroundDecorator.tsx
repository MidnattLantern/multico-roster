import Styles from "../styles/NameTitleBackgroundDecorator.module.css";

const NameTitleBackgroundDecorator: React.FC<{
    currentCharacterID: number;
    currentCharacterName: string;
}> = ({
    currentCharacterID,
    currentCharacterName
}) => {
    return(<>
        <svg className={`${Styles.NameTitleBackgroundDecoratorComponent} ${Styles.CannotInteract}`}>
            <text x="0" y="90%" className={Styles.NameTitleBackgroundDecoratorText}>
                {currentCharacterID !== 0 ? (<>
                    {currentCharacterName} {currentCharacterName}
                </>) : (<>
                    multico-roster multico-roster
                </>)}

            </text>
        </svg>
    </>)
};

export default NameTitleBackgroundDecorator;