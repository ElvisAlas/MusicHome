import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style/Menu.css'

function Menu() {
  const [userData, setUserData] = useState(null);
  const [canciones, setCanciones] = useState([]);
  const [cancion, setCancion] = useState('');

  useEffect(() => {
   
    axios.get('https://reqres.in/api/users/5')
      .then(response => {
        setUserData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    if (cancion.trim() === '') {
      alert('Debes ingresar algo');
      return;
    }

    getSong(cancion);
    setCancion('');
  }

  async function getSong(cancion) {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: cancion,
        type: 'multi',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': '828576eb76msh46d8fef1b694bdbp1d7ffbjsn3c9327155e08',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      setCanciones(response.data.tracks.items);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">
       
          <div className="user-info">
            {userData && (
              <>
                <img src={userData.avatar} alt="User Avatar" /> <span></span>
                <span> {userData.first_name} {userData.last_name}</span>
                <span> ({userData.email}) </span>
              </>
            )}
          </div>
        </div>
        <form onSubmit={handleSearch}>
          <span className="buscar">Buscar Cancion</span>
          <input type="text" value={cancion} onChange={e => setCancion(e.target.value)} />
          <button type='submit'>Buscar</button>
        </form>
      </nav>
  
      <div className="Main">
        <table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre de la canción</th>
              <th>Artista</th>
              <th>Reproducir</th>
            </tr>
          </thead>
          <tbody>
 
            {canciones.map((cancion, index) => (
              <tr key={index}>
                <td><img src={cancion.data.albumOfTrack.coverArt.sources[0].url} alt="Album Cover"   className="album-cover"/></td>
                <td className="cancion">{cancion.data.name} </td>
                <td className="cancion">{cancion.data.artists.items[0].profile.name} </td>
                <td><a href={cancion.data.uri}><button className='PlayButton'>Escuchar en Spoty</button></a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Menu;
