import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footbar from './Footbar';

const Game = () => {
  let status = 'easy';
  let rows, cols;

  if (status === 'easy') {
    rows = 3;
    cols = 4;
  } else if (status === 'normal') {
    rows = 4;
    cols = 5;
  } else if (status === 'hard') {
    rows = 4;
    cols = 6;
  } else {
    throw new Error('Invalid status');
  }

  const totalCards = rows * cols;

  const [pairs, setPairs] = useState([]);
  const [flipped, setFlipped] = useState(Array(totalCards).fill(false));
  const [flippedIndexes, setFlippedIndexes] = useState([]);

  useEffect(() => {
    const initialPairs = [];
    for (let i = 1; i <= totalCards / 2; i++) {
      initialPairs.push(i);
      initialPairs.push(i);
    }

    for (let i = initialPairs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initialPairs[i], initialPairs[j]] = [initialPairs[j], initialPairs[i]];
    }

    setPairs(initialPairs);
  }, [totalCards]);

  const handleClick = (index) => {
    if (flipped[index] || flippedIndexes.length === 2) {
      return; // Do nothing if already flipped or already 2 cards flipped
    }

    const newFlipped = [...flipped];
    newFlipped[index] = true;
    const newFlippedIndexes = [...flippedIndexes, index];

    setFlipped(newFlipped);
    setFlippedIndexes(newFlippedIndexes);

    if (newFlippedIndexes.length === 2) {
      const [firstIndex, secondIndex] = newFlippedIndexes;
      if (pairs[firstIndex] === pairs[secondIndex]) {
        // It's a match, leave them flipped
        setFlippedIndexes([]);
      } else {
        // Not a match, flip them back after a short delay
        setTimeout(() => {
          const resetFlipped = [...newFlipped];
          resetFlipped[firstIndex] = false;
          resetFlipped[secondIndex] = false;
          setFlipped(resetFlipped);
          setFlippedIndexes([]);
        }, 1000); // 1 second delay to show second card
      }
    }
  };

  return (
    <div>
      <Navbar />

      <div
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        className="grid gap-10 max-w-[900px] h-[600px] mx-auto mt-12"
      >
        {pairs.map((value, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="start flex items-center justify-center text-2xl rounded-lg text-black max-h-[180px]"
          >
            {flipped[index] ? value : null}
          </div>
        ))}
      </div>

      <Footbar />
    </div>
  );
};

export default Game;