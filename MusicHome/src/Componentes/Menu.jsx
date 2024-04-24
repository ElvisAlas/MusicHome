
import React from 'react';
import useUserData from '../Hooks/useUserData';
import useSearch from '../Hooks/useSearch'
import useSongData from '../Hooks/useSongData';
import '../Style/Menu.css';

function Menu() {
  const userData = useUserData();
  const [cancion, setCancion, handleSearch, canciones] = useSearch(useSongData);

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
          <input
            type="text"
            value={cancion}
            onChange={e => setCancion(e.target.value)}
            className="form-control"
          />
          <button type='submit'>Buscar</button>
        </form>
      </nav>

      <div className="Main">
        {canciones.length > 0 ? (
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
                  <td>
                    <img src={cancion.data.albumOfTrack.coverArt.sources[0].url} alt="Album Cover" className="album-cover" />
                  </td>
                  <td className="cancion">{cancion.data.name}</td>
                  <td className="cancion">{cancion.data.artists.items[0].profile.name}</td>
                  <td>
                    <a href={cancion.data.uri}>
                      <button className='PlayButton'>Escuchar en Spoty</button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2 className="vacio">No hay canciones para mostrar</h2>
        )}
      </div>
    </>
  );
}


export default Menu;
