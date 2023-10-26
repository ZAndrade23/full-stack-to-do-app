import CharacterItem from '../CharacterItem/CharacterItem.jsx';
function CharacterList(props){
    return (
<>
<h1>Character List:</h1>
{/* {JSON.stringify(props.characterList)} */}
<ul>
{
    props.characterList.map((character) => {
        return <CharacterItem
        key={character.id}
        getCharacterList={props.getCharacterList}
        character={character}/>
    })
}


</ul>



</>
    )
}


export default CharacterList;