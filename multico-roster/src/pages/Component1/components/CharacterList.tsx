import Styles from "../styles/CharacterList.module.css";
import rosterData from "../../../data/roster_data.json";
import { MapCharacterImages } from "../../../assets/character-roster/MapCharacterImages";
import { useRoster } from "../../../contexts/RosterContext";

type CharacterTSType = {
    id: number;
    name: string;
    colorTheme: string;
};

const CharacterOption: React.FC<{ character: CharacterTSType }> = ({ character }) => {
    const { selectedCharacter, setSelectedCharacter } = useRoster();
    const images = MapCharacterImages[character.name];

    if (character.id !== 0) { // id 0 cause blackout, using div instead for button for desired mix-blend-mode outcome
        return(<>
            <div
            className={`${Styles.CharacterItem} ${selectedCharacter === character.id ? Styles.CharacterItemSelected : null}`}
            onClick={() => {setSelectedCharacter(character.id)}}
            >
                <img
                style={{ backgroundColor: character.colorTheme}} // override the inline shadow, there's a mix-blend-mode in css
                className={`${Styles.CharacterItemImageSize} ${Styles.CannotInteract}`}
                src={images[2]}
                alt={character.name}
                />
            </div>
        </>)
    };
};

const CharacterList = () => {

    const { selectedCharacter, setSelectedCharacter } = useRoster();

    return(<>
        <div className={Styles.CharacterListFoundation}>

            <div className={`${Styles.CharacterItem} ${selectedCharacter === 0 ? Styles.CharacterItemSelected : null}`} onClick={() => {setSelectedCharacter(0)}}>
                <p className={Styles.DeselectOption}>
                    NONE
                </p>
            </div>

            {rosterData.map((character) => (
                <CharacterOption
                character={character}
                />
            ))}

        </div>
    </>)
};

export default CharacterList;