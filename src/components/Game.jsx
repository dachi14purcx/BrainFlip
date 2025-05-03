import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footbar from './Footbar';
import { useParams, useNavigate } from 'react-router-dom';

const Game = () => {
  const { difficulty } = useParams();
  const navigate = useNavigate();

  const goToLead = () => navigate('/leaderboard');

  let rows = 0, cols = 0, time = 0, points = 0;
  if (difficulty === 'easy') {
    rows = 3;
    cols = 4;
    time = 600000;
    points = 10;
  } else if (difficulty === 'normal') {
    rows = 4;
    cols = 5;
    time = 480000;
    points = 25;
  } else if (difficulty === 'hard') {
    rows = 4;
    cols = 6;
    time = 360000;
    points = 50;
  }

  const totalCards = rows * cols;
  const [pairs, setPairs] = useState([]);
  const [flipped, setFlipped] = useState(Array(totalCards).fill(false));
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedIndexes, setMatchedIndexes] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(Math.round(time / 1000));
  const [timesUp, setTimesUp] = useState(false);
  const [hasScored, setHasScored] = useState(false);

  useEffect(() => {
    const initialPairs = [];
    for (let i = 1; i <= totalCards / 2; i++) {
      initialPairs.push(i, i);
    }

    // Shuffle
    for (let i = initialPairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initialPairs[i], initialPairs[j]] = [initialPairs[j], initialPairs[i]];
    }

    setPairs(initialPairs);
  }, [totalCards]);

  const handleClick = (index) => {
    if (flipped[index] || flippedIndexes.length === 2) return;

    const newFlipped = [...flipped];
    newFlipped[index] = true;
    const newFlippedIndexes = [...flippedIndexes, index];

    setFlipped(newFlipped);
    setFlippedIndexes(newFlippedIndexes);

    if (newFlippedIndexes.length === 2) {
      const [first, second] = newFlippedIndexes;
      if (pairs[first] === pairs[second]) {
        setMatchedIndexes((prev) => [...prev, first, second]);
        setFlippedIndexes([]);
      } else {
        setTimeout(() => {
          const resetFlipped = [...newFlipped];
          resetFlipped[first] = false;
          resetFlipped[second] = false;
          setFlipped(resetFlipped);
          setFlippedIndexes([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (secondsLeft <= 0) {
      setTimesUp(true);
      return;
    }

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimesUp(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const min = Math.floor(secondsLeft / 60);
  const sec = secondsLeft % 60;

  useEffect(() => {
    if (matchedIndexes.length === totalCards && !hasScored) {
      setHasScored(true);

      const email = localStorage.getItem("loggedInUser");
      const users = JSON.parse(localStorage.getItem("users")) || {};

      if (email && users[email]) {
        users[email].score = (users[email].score || 0) + points;
        localStorage.setItem("users", JSON.stringify(users));
      }
    }
  }, [matchedIndexes, totalCards, hasScored, points]);

  const goToGames = () => {
    navigate('/games');
  };

  return (
    <div>
      <Navbar />

      <div
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        className="grid gap-[1.5vw] max-w-[50vw] h-[35vw] mx-auto mt-[2.7vw]"
      >
        {pairs.map((value, index) => {
          const isFlipped = flipped[index];
          const isMatched = matchedIndexes.includes(index);

          return (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={`flex items-center justify-center text-2xl text-black rounded-lg transition-all duration-300
                w-full h-full
                ${isFlipped ? 'bg-white' : 'start'}
                ${isMatched ? 'bord' : 'border border-transparent'}`}
            >
              <span className={`${isFlipped ? 'visible' : 'invisible'}`}>{value}</span>
            </div>
          );
        })}

        {timesUp && matchedIndexes.length !== totalCards && (
          <div className='absolute left-0 top-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center'>
            <div className='w-[290px] h-[190px] flex flex-col justify-center items-center bg-white rounded-2xl'>
              <h2 className='text-black mb-2 text-4xl'>You've lost</h2>
              <p className='text-gray-800 text-xl mb-4'>So poor 😭🤣</p>
              <button onClick={goToGames} className='px-4 py-2 start text-black text-3xl rounded hover:opacity-80 active:opacity-100'>Go to Games</button>
            </div>
          </div>
        )}

        {matchedIndexes.length === totalCards && (
          <div className='absolute left-0 top-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center'>
            <div className='w-[290px] h-[190px] flex flex-col justify-center items-center bg-white rounded-2xl alert'>
              <h2 className='text-black mb-2 text-4xl'>You've won</h2>
              <p className='text-gray-800 text-xl mb-4'>Wow ☝️🤓</p>
              <button onClick={goToLead} className='px-4 py-2 start text-black text-2xl rounded hover:opacity-80 active:opacity-100'>See Leaderboard</button>
            </div>
          </div>
        )}
      </div>

      <Footbar />
      <div className='absolute top-28 right-[6vw] bg-blac text-5xl font-semibold z-[-1]'>
        {min}:{sec < 10 ? `0${sec}` : sec}
      </div>
    </div>
  );
};

export default Game;
