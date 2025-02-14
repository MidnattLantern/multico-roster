import Styles from "./Component1.module.css";
import {
    CornerDecorators,
    ThirdsCrossDecorator,
    ColorPalette,
    NameTitle,
    MiniCollage,
    ContinueButton,
    DisplayCharacter,
    NameTitleBackgroundDecorator,
    CharacterList
} from "./components";
import rosterData from "../../data/roster_data.json";
import { useEffect, useState } from "react";

const Component1 = () => {
    const [identifyCharacter, setIdentifyCharacter] = useState<number>(0); // 0 or ID does not exist will cause "blackout"
    const currentCharacterID = rosterData[identifyCharacter]["id"];
    const currentCharacterName = rosterData[identifyCharacter]["name"];
    const currentCharacterSubtext = rosterData[identifyCharacter]["subtext"];

    useEffect(() => {
        setIdentifyCharacter(1);
    }, []);

    return(<>
        <div className={Styles.Component1Foundation}>
            <CornerDecorators />
            <ColorPalette />
            <ThirdsCrossDecorator />

            <div className={Styles.LeftSection}>
                <MiniCollage
                currentCharacterID={currentCharacterID}
                currentCharacterName={currentCharacterName}
                />
                <NameTitleBackgroundDecorator />
            </div>
            <div className={Styles.CentreSection}>
                <DisplayCharacter />
            </div>
            <div className={Styles.RightSection}>
                <NameTitle
                currentCharacterName={currentCharacterName}
                currentCharacterSubtext={currentCharacterSubtext}
                />
                <ContinueButton />
            </div>

            <CharacterList />

        </div>
    </>)
}

export default Component1