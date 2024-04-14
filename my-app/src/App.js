import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import logo from './images/logo_navbar.png';
import icon_ig from './images/icon_ig.png';
import icon_app_store from './images/icon_app_store.png';
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <nav className="navbar">
      <div className="logoWrapper">
        <Link to="/"> <img src={logo} alt="logo" className="logo"/> </Link>
      </div>
      
      <div className="navbarMenu">
        <NavLink to="/" className="navbarItem"> HOME </NavLink>
        <NavLink to="/about" className="navbarItem"> ABOUT </NavLink>
      </div>
    </nav>

    <div className="externalLinkWrapper">
      <div> <Link to="https://www.instagram.com/eventechoucla"> <img src={icon_ig} alt="Instagram logo" className="externalLinkItems"/> </Link> </div>
      <div> <Link to="https://www.instagram.com/eventechoucla"> <img src={icon_app_store} alt="App Store logo" className="externalLinkItems"/> </Link> </div>
    </div>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
