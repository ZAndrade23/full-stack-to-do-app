import axios from 'axios';
import './CharacterItem.css';
function CharacterItem(props) {
    const clickHandler = () => {
        axios.delete(`/character/${props.character.id}`).then((response) => {
            props.getCharacterList();
        }).catch((error) => {
            console.error(error);
            alert('something went wrong!');
        })
    }
    const toggleMain = () => {
        // toggle creature property of immortal
        axios.put(`/character/${props.character.id}`).then((response) => {
            // After edit, refresh the list
            props.getCharacterList();
        }).catch((error)=> {
            console.error(error);
            alert('SOmething went wrong!');
        })
        

    }
    return (
        <li className={ props.character.main ? 'highlight' : 'normal'}>
            {props.character.name} is from the anime {props.character.anime}
            <button onClick={clickHandler}> Instant Transmit </button>
            <button onClick={toggleMain}> Toggle </button>
        </li>

    )
}

export default CharacterItem;