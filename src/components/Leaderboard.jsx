import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("users");
    if (!raw) return;

    try {
      const users = JSON.parse(raw);
      const list = Object.values(users)
        .filter(u => typeof u.username === 'string' && typeof u.score === 'number')
        .sort((a, b) => b.score - a.score);

      setLeaderboard(list);
    } catch (e) {
      console.error("Failed to parse leaderboard data:", e);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className='w-screen flex flex-col items-center gap-3 mt-10'>
        <h2 className='header text-[5vw] font-bold'>Leaderboard</h2>
        <ul className='min-w-[50vw] min-h-[28vw] bg-white bord1 rounded-2xl p-4 text-xl'>
          {leaderboard.length === 0 ? (
            <li className="text-center text-gray-500">No players yet.</li>
          ) : (
            leaderboard.map((user, index) => (
              <li key={index} className="my-2">
                {index + 1}. {user.username}: {user.score} pts
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;