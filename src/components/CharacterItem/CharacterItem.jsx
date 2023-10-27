import axios from 'axios';

function CharacterItem(props) {
    const clickHandler = () => {
        axios.delete(`/character/${props.character.id}`).then((response) => {
            props.getCharacterList();
        }).catch((error) => {
            console.error(error);
            alert('something went wrong!');
        })
    
    
    }
    return (
        <li>
            {props.character.name} is from the anime {props.character.anime}
            <button onClick={clickHandler}> Instant Transmit </button>
        </li>

    )
}

export default CharacterItem;