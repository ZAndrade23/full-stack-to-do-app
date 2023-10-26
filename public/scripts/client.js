




// getCharacters()
// function getCharacters() {
//     axios.get('/characters').then((response) => {
//         console.log(response.data);
//         renderCharacters(response.data);
//     }).catch((error) => {
//         console.log('error in GET', error);
//     });
//     }
// function renderCharacters(characterList){
//     document.querySelector('#root').innerHTML = '';

//     for(let character of characterList) {
//         document.querySelector('#root').innerHTML += `
//         <tr>
//             <td>${character.name}</td>
//             <td>${character.anime}</td>
//         </tr>
//         `;
//     }
// }