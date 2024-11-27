import React, { useState } from 'react';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [score, setScore] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/leaderboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, score }),
    });
    // Reset form or handle success
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
        />
        <button type="submit">Update Score</button>
      </form>
    </div>
  );
};

export default Profile;