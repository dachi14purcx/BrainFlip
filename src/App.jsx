import { Routes, Route, useLocation } from 'react-router-dom';
import Games from './components/Games';
import Signup from './components/Signup';
import Header from './components/Header';
import Signin from './components/Signin';
import Game from './components/Game';

function App() {
  const location = useLocation();

  const hideHeaderPaths = ['/games', '/signup', '/signin', '/game'];
  const hideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <div>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/games" element={<Games />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;