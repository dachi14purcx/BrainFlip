import React from 'react'
import { useState, useEffect} from 'react';
import Navbar from './Navbar';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  
  useEffect(() => {
    const users = [];
    for (let key in localStorage) {
      if (localStorage.hasOwnProperty(key) && key !== "currentUser") {
        try {
          const userData = JSON.parse(localStorage.getItem(key));
          if (userData?.username && typeof userData?.score === "number") {
            users.push({ username: userData.username, score: userData.score });
          }
        } catch (e) {
        }
      }
    }

    const sorted = users.sort((a, b) => b.score - a.score);
    setLeaderboard(sorted);
  }, []);

  return (
    <div>
        <Navbar />

        <div className='w-screen flex flex-col items-center gap-3 mt-10'>
            <h2 className='header text-[5vw] font-bold'>Leaderboard</h2>
            <ul className='min-w-[50vw] min-h-[28vw] bg-white bord1 rounded-2xl'>
                {leaderboard.map((user, index) => (
                <li key={index}>
                    {user.username}: {user.score} pts
                </li>
                ))}
            </ul>
        </div>
    </div>
    )
  }

export default Leaderboard