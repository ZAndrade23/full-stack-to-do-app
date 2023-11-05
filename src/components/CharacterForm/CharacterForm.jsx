import {useState} from 'react';
import axios from 'axios';
import './CharacterForm.css';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function CharacterForm(props) {
    const[name, setName] = useState('');
    const[anime, setAnime] = useState('');
    const[main, setMain] = useState('');

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
        <Paper elevation={3} id="input-form">
        <h2>Submit New Character:</h2>
        <form onSubmit={sendChararacterToServer}>
            Name: <TextField required variant="outlined" type="text" placeholder="Name..." value={name} onChange={(e) => setName(e.target.value)}/>
            <p>{name}</p>


            Anime: <TextField required variant="outlined" type="text" placeholder="Anime..." value={anime} onChange={(e) => setAnime(e.target.value)}/>
            <p>{anime}</p>
            
            Main Character: <TextField required variant="outlined" type="text" placeholder="Yes or No..." value={main} onChange={(e) => setMain(e.target.value)}/>
            <p>{main}</p>

            <Button variant="contained"> Add Character </Button>
        </form>
        


        
        </Paper>
    )};


    export default CharacterForm;