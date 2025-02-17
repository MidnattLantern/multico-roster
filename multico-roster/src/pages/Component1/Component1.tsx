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
import { useRoster } from "../../contexts/RosterContext";

const Component1 = () => {
    const [identifyCharacter, setIdentifyCharacter] = useState<number>(0); // 0 or ID does not exist will cause "blackout"
    const currentCharacterID = rosterData[identifyCharacter]["id"];
    const currentCharacterName = rosterData[identifyCharacter]["name"];
    const currentCharacterSubtext = rosterData[identifyCharacter]["subtext"];
    const currentColorPrimary = rosterData[identifyCharacter]["colorPrimary"];
    const currentColorSecondary = rosterData[identifyCharacter]["colorSecondary"];
    const currentColorAccent = rosterData[identifyCharacter]["colorAccent"];
    const currentColorTheme = rosterData[identifyCharacter]["colorTheme"];

    const {
        selectedCharacter,
    } = useRoster();

    useEffect(() => {
        setIdentifyCharacter(selectedCharacter);
    }, [selectedCharacter]);

    return(<>
        <div className={Styles.Component1Foundation}>
            <CornerDecorators />
            <ColorPalette
            currentColorPrimary={currentColorPrimary}
            currentColorSecondary={currentColorSecondary}
            currentColorAccent={currentColorAccent}
            currentColorTheme={currentColorTheme}
            />
            <ThirdsCrossDecorator />

            <div className={Styles.LeftSection}>
                <MiniCollage
                currentCharacterID={currentCharacterID}
                currentCharacterName={currentCharacterName}
                currentColorTheme={currentColorTheme}
                />
                <NameTitleBackgroundDecorator
                currentCharacterID={currentCharacterID}
                currentCharacterName={currentCharacterName}
                />
            </div>
            <div className={Styles.CentreSection}>
                <DisplayCharacter
                currentCharacterID={currentCharacterID}
                currentCharacterName={currentCharacterName}
                />
            </div>
            <div className={Styles.RightSection}>
                <NameTitle
                currentCharacterName={currentCharacterName}
                currentCharacterSubtext={currentCharacterSubtext}
                />
                <ContinueButton
                currentCharacterID={currentCharacterID}
                currentCharacterName={currentCharacterName}
                />
            </div>

            <CharacterList />

        </div>
    </>)
}

export default Component1