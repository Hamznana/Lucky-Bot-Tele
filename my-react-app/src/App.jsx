import React from 'react';
import Leaderboard from '../src/componen/leaderboard.jsx';
import Profile from '../src/componen/profile.jsx';

const App = () => {
  return (
    <div>
      <h1>Telegram Bot Leaderboard</h1>
      <Profile />
      <Leaderboard />
    </div>
  );
};

export default App;