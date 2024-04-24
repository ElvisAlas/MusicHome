import { useState } from 'react';

function useSearch(useSongData) {
  const [cancion, setCancion] = useState('');
  const [canciones, getSong] = useSongData();

  function handleSearch(e) {
    e.preventDefault();
    if (cancion.trim() === '') {
      alert('Debes ingresar algo');
      return;
    }

    getSong(cancion);
    setCancion('');
  }

  return [cancion, setCancion, handleSearch, canciones];
}

export default useSearch;
