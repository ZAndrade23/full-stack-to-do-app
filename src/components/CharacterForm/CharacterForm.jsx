import {useState} from 'react';
import axios from 'axios';


function CharacterForm(props) {
    const[name, setName] = useState('');
    const[anime, setAnime] = useState('');
    const[main, setMain] = useState(' ');

const sendChararacterToServer = (event) => {
    event.preventDefault();
console.log('sendCharacterToServer', name);
axios.post('/character', {
    name: name,
    anime: anime,
    main: main
}).then((response) => {
    console.log(response.data);

    setAnime('');
    setName('');
    setMain(' ')
props.getCharacterList();
}).catch((error) => {
    console.error(error);
    alert('somethin went wrong!');
});

}
    
    
    return (
        <>
        <h2>Submit New Character:</h2>
        <form onSubmit={sendChararacterToServer}>
            Name: <input value={name} onChange={(e) => setName(e.target.value)}/>
            <p>{name}</p>


            Anime: <input value={anime} onChange={(e) => setAnime(e.target.value)}/>
            <p>{anime}</p>
            
            Main Character: <input value={main} onChange={(e) => setMain(e.target.value)}/>
            <p>{main}</p>
            <button> SEND </button>
        </form>
        


        
        </>
    )};


    export default CharacterForm;