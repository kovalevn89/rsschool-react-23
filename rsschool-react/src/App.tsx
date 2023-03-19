import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import Mainpage from './pages/Mainpage';
import Aboutpage from './pages/Aboutpage.jsx';
import Errorpage from './pages/Errorpage.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          About
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
