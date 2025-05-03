import { Routes, Route, useLocation } from 'react-router-dom';
import Games from './components/Games';
import Signup from './components/Signup';
import Header from './components/Header';
import Signin from './components/Signin';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';

function App() {
  const location = useLocation();

  const hideHeaderPaths = ['/games', '/signup', '/signin', '/game/easy', '/game/normal', '/game/hard', '/leaderboard'];
  const hideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <div>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/games" element={<Games />} /> 
        <Route path="/game/:difficulty" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App;