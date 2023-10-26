import axios from 'axios';

function CharacterItem(props) {
        props.getCharacterList();
    


    return (
        <li>
            {props.character.name} is from the anime {props.character.anime}
        </li>

    )
}

export default CharacterItem;