// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import logo from './images/logo_navbar.png';
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <nav className="navbar">
      <div className="logoWrapper">
        <Link to="/"> <img src={logo} alt="logo" className="logo"/> </Link>
      </div>
      
      <div className="navbarMenu">
        <NavLink to="/" className="navbarItem"> Home </NavLink>
        <NavLink to="/about" className="navbarItem"> About </NavLink>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
