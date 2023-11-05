import axios from 'axios';
import './CharacterItem.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


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
        <Grid item xs={12} md={4} >
           <Card >
                <CardContent className={ props.character.main ? 'highlight' : 'normal'}>
                    <Typography variant="h3">
                        {props.character.name}
                    </Typography>
                    <Typography variant="body2">
                         From the anime {props.character.anime}
                    </Typography>

                </CardContent>
                <CardActions sx={{padding:'15px',float: 'left'}}>
                <Button size="small" variant="contained" color="error" onClick={clickHandler}> Instant Transmit </Button>
            <Button size="small" variant="contained" onClick={toggleMain}> Toggle </Button>
                </CardActions>
                
           </Card>
             
            < br/>
            
        </Grid>

    )
}

export default CharacterItem;