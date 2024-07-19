import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Playlists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/api/playlists', {
          headers: {
            'x-auth-token': token,
          },
        });
        setPlaylists(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div>
      <h2>Your Playlists</h2>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist._id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;
