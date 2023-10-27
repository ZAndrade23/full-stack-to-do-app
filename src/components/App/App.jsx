import {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterList from '../CharacterList/CharacterList.jsx';
import CharacterForm from '../CharacterForm/CharacterForm.jsx';

function App () {
  const [characterList, setCharacterList] = useState([]);

  const getCharacterList = () => {
    axios.get('/character').then((response) => {
      console.log(response.data);
      setCharacterList(response.data);
    }).catch((error) => {
      console.log('error in getCharacterList', error);
      alert('Something went wrong!');
    })
  }
useEffect(() => {
  getCharacterList();
},[]);

  return (
    <div>
      <h1>TO DO APP</h1>
      <CharacterForm getCharacterList={getCharacterList}/>
      <CharacterList
      getCharacterList={getCharacterList}
       characterList={characterList} />
    </div>
  );

}

export default App
