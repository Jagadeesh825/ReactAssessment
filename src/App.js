// App.js

import React from 'react';
import BasketballPlayerCard from './components/BasketballPlayerCard';
import './App.css';

const players = [
  {
    name: "LeBron James",
    image: "https://www.usatoday.com/gcdn/presto/2020/01/26/USAT/80802abd-a62b-4420-8e15-ac4bd08c5929-2020-01-25_LeBron1.jpg?crop=2245,1688,x476,y589&width=700&height=527&format=pjpg&auto=webp",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5
    }
  },
  {
    name: "Stephen Curry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rD1yAL6yVhVJJCrpBhfbGECwpNip5nge4g&s",
    position: "Guard",
    stats: {
      pointsPerGame: 27.3,
      assistsPerGame: 6.2,
      reboundsPerGame: 5.4
    }
  },
  {
    name: "Kevin Durant",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiUOkH7-omqG9qzrDiPYx4pyiAMWvaXRvn4w&s",
    position: "Forward",
    stats: {
      pointsPerGame: 27.1,
      assistsPerGame: 5.8,
      reboundsPerGame: 7.1
    }
  }
];

function App() {
  return (
    <div className="App">
      <div className="player-grid">
        {players.map((player, index) => (
          <BasketballPlayerCard
            key={index}
            name={player.name}
            image={player.image}
            position={player.position}
            stats={player.stats}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
