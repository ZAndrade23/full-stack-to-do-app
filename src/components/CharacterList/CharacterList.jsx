import CharacterItem from '../CharacterItem/CharacterItem.jsx';
import Grid from '@mui/material/Grid'


function CharacterList(props){
    return (
<>
<h1>Character List:</h1>
{/* {JSON.stringify(props.characterList)} */}
<Grid container spacing={2}>
{
    props.characterList.map((character) => {
        return <CharacterItem
        key={character.id}
        getCharacterList={props.getCharacterList}
        character={character}/>
    })
}


</Grid>



</>
    )
}


export default CharacterList;