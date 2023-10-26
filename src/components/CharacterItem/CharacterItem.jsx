import axios from 'axios';

function CharacterItem(props) {
        
    


    return (
        <li>
            {props.character.name} is from the anime {props.character.anime}
        </li>

    )
}

export default CharacterItem;