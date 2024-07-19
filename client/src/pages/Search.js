import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get('/api/spotify/search', {
        params: { query },
      });
      setResults(res.data.tracks.items);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <h2>Search Music</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Search</label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </div>
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((track) => (
          <li key={track.id}>
            {track.name} by {track.artists[0].name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
