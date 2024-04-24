import React from 'react';
import '../Style/ArtistModal.css';
function ArtistModal({ artistInfo, onClose }) {
    console.log(artistInfo)

    return (
        <div className="modal">
            <div className="modal-content">
              
                <img src={artistInfo.albumOfTrack.coverArt.sources[0].url} alt="Album Cover" />
                <h2 className='Titulo'>{artistInfo.name}</h2>
                <h3 className='Titulo'>{artistInfo.artists.items[0].profile.name}</h3>
                <div className="button-container">
                    <a href={artistInfo.uri}>
                        <button className='PlaySpoty'>Escuchar en Spotify</button>
                    </a>
                    <a >
                    <button className='PlaySpoty' onClick={onClose}>Cerrar</button>
                    </a>
        
                  
                  
                </div>
            </div>
        </div>
    );
}

export default ArtistModal;
