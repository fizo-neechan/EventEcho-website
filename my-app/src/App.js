import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <nav className="navbar">
      {/* <div className="logoWrapper">
        <Link to="/"> <img src={logo} alt="logo" className="logo"/> </Link>
      </div> */}
      
      <div className="navbarMenu">
        <NavLink to="/" className="navbarItem"> Home </NavLink>
        <NavLink to="/contact" className="navbarItem"> Contact </NavLink>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
