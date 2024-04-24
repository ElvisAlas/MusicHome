import { useState } from 'react';
import axios from 'axios';

function useSongData() {
  const [canciones, setCanciones] = useState([]);

  async function getSong(cancion) {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: cancion,
        type: 'multi',
        offset: '0',
        limit: '9',
        numberOfTopResults: '5'
      },
      headers: {
        'X-RapidAPI-Key': '828576eb76msh46d8fef1b694bdbp1d7ffbjsn3c9327155e08',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
        console.log(response.data.albums)
       setCanciones(response.data.tracks.items);
      //setCanciones(response.data.albums);
    
    } catch (error) {
      console.error(error);
    }
  }

  return [canciones, getSong];
}

export default useSongData;
