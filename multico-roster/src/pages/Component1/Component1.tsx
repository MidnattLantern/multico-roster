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
import CharacterInfoPanel from "./components/CharacterInfoPanel";

const Component1 = () => {
    const [identifyCharacter, setIdentifyCharacter] = useState<number>(0); // 0 or ID does not exist will cause "blackout"
    const currentCharacterID = rosterData[identifyCharacter]["id"];
    const currentCharacterName = rosterData[identifyCharacter]["name"];
    const currentCharacterSubtext = rosterData[identifyCharacter]["subtext"];

    const currentColorPrimary = rosterData[identifyCharacter]["colorPrimary"];
    const currentColorSecondary = rosterData[identifyCharacter]["colorSecondary"];
    const currentColorAccent = rosterData[identifyCharacter]["colorAccent"];
    const currentColorTheme = rosterData[identifyCharacter]["colorTheme"];

    const currentAlignMiniCollageImageTop1 = rosterData[identifyCharacter]["alignMiniCollageImageTop1"];
    const currentAlignMiniCollageImageLeft1 = rosterData[identifyCharacter]["alignMiniCollageImageLeft1"];
    const currentAlignMiniCollageImageTop2 = rosterData[identifyCharacter]["alignMiniCollageImageTop2"];
    const currentAlignMiniCollageImageLeft2 = rosterData[identifyCharacter]["alignMiniCollageImageLeft2"];
    const currentAlignMiniCollageImageTop3 = rosterData[identifyCharacter]["alignMiniCollageImageTop3"];
    const currentAlignMiniCollageImageLeft3 = rosterData[identifyCharacter]["alignMiniCollageImageLeft3"];

    const [showCharacterInfoPanel, setShowCharacterInfoPanel] = useState<boolean>(false);

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
                currentAlignMiniCollageImageTop1={currentAlignMiniCollageImageTop1}
                currentAlignMiniCollageImageLeft1={currentAlignMiniCollageImageLeft1}
                currentAlignMiniCollageImageTop2={currentAlignMiniCollageImageTop2}
                currentAlignMiniCollageImageLeft2={currentAlignMiniCollageImageLeft2}
                currentAlignMiniCollageImageTop3={currentAlignMiniCollageImageTop3}
                currentAlignMiniCollageImageLeft3={currentAlignMiniCollageImageLeft3}
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
                setShowCharacterInfoPanel={setShowCharacterInfoPanel}
                />
            </div>

            <CharacterList />
            {showCharacterInfoPanel ?
                <CharacterInfoPanel
                currentCharacterName={currentCharacterName}
                currentCharacterSubtext={currentCharacterSubtext}
                setShowCharacterInfoPanel={setShowCharacterInfoPanel}
                />
            : null}

        </div>
    </>)
}

export default Component1