import { Routes, Route, useLocation } from 'react-router-dom';
import Games from './components/Games';
import Signup from './components/Signup';
import Header from './components/Header';
import Signin from './components/Signin';

function App() {
  const location = useLocation();

  const hideHeader = location.pathname === '/games' || location.pathname === '/signup' || location.pathname === '/signin';

  return (
    <div>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/games" element={<Games />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;