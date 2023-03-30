import './App.scss';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';

import Mainpage from './pages/Mainpage';
import Aboutpage from './pages/Aboutpage.jsx';
import Errorpage from './pages/Errorpage.jsx';
import Inputpage from './pages/Inputpage.jsx';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <header>
        <div className="logo__box">
          <p>MovieBox</p>
        </div>
        <div className="current__page">
          <p>{location.pathname}</p>
        </div>
        <div className="nav__menu">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/input"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            Form
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'active' : ''
            }
          >
            About
          </NavLink>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/input" element={<Inputpage />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
