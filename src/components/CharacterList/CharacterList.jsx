import CharacterItem from '../CharacterItem/CharacterItem.jsx';
function CharacterList(props){
    return (
<>
<h1>Character List:</h1>
{JSON.stringify(props.characterList)}
<ul>
{
    props.characterList.map((character) => {
        return <CharacterItem
        key={character.id}
        getCharacterList={props.getCharacterList}
        character={character}/>
    })
}
{
    props.characterList.map((character) => (
        <li key={character.name}>{character.name}</li>
    ))
}

</ul>



</>
    )
}


export default CharacterList;