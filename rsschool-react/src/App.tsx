import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Mainpage from './pages/Mainpage';
import Aboutpage from './pages/Aboutpage.jsx';
import Errorpage from './pages/Errorpage.jsx';
import Inputpage from './pages/Inputpage.jsx';

import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  const location = useLocation();

  return (
    <Provider store={store}>
      <div className="App">
        <Header path={location.pathname} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/input" element={<Inputpage />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        </main>
      </div>
    </Provider>
  );
};

export default App;
