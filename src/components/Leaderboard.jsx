import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || {};

    const formatted = Object.values(users)
      .filter(user => typeof user.score === 'number')
      .map(user => ({
        name: user.name || user.email,
        score: user.score,
      }));

    const sorted = formatted.sort((a, b) => b.score - a.score);
    setLeaderboard(sorted);
  }, []);

  return (
    <div>
      <Navbar />
      <div className='w-screen flex flex-col items-center gap-3 mt-10 text-black'>
        <h2 className='header text-[5vw] font-bold'>Leaderboard</h2>
        <ul className='min-w-[50vw] min-h-[28vw] bg-white bord1 rounded-2xl p-5 text-[24px] text-black'>
          {leaderboard.map((user, index) => (
            <li key={index}>
              {index + 1}. {user.name}: {user.score} pts
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;