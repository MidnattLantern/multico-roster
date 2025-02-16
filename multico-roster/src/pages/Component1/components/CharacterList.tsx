import Styles from "../styles/CharacterList.module.css";
import rosterData from "../../../data/roster_data.json";
import { MapCharacterImages } from "../../../assets/character-roster/MapCharacterImages";

type Character = {
    id: number;
    name: string;
    colorTheme: string;
};

const ChildComponent: React.FC<{
    character: Character;
}> = ({
    character
}) => {
    const images = MapCharacterImages[character.name];

    if (character.id !== 0) { // id 0 cause blackout
        return(<>
            <div className={`${Styles.CharacterItem} ${Styles.CharacterItemSelected}`}>
                <img
                style={{ backgroundColor: character.colorTheme}} // override the inline shadow, there's a mix-blend-mode in css
                className={`${Styles.CharacterItemImageSize} ${Styles.CannotInteract}`}
                src={images[2]}
                alt={character.name}
                />
            </div>
        </>)
    }

};

const CharacterList = () => {

    return(<>
        <div className={Styles.CharacterListFoundation}>

            <div className={`${Styles.CharacterItem} ${Styles.CharacterItemSelected}`}>
                <p>none</p>
            </div>

            {rosterData.map((character) => (
                <ChildComponent character={character}/>
            ))}

        </div>
    </>)
};

export default CharacterList;