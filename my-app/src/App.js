import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact_us";
import logo_text from "./images/logo_navbar.png";
import logo from "./images/logo_without_background.png";
import icon_ig from "./images/icon_ig.png";
import icon_app_store from "./images/icon_app_store.png";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="logoWrapper">
          <Link to="/">
            {" "}
            <img src={logo_text} alt="logo" className="logo_text" />{" "}
          </Link>
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" className="logo" />{" "}
          </Link>
        </div>

        <div className="navbarMenu">
          <NavLink to="/" className="navbarItem">
            {" "}
            HOME{" "}
          </NavLink>
          <NavLink to="/about" className="navbarItem">
            {" "}
            ABOUT{" "}
          </NavLink>
          <NavLink to="/contact_us" className="navbarItem">
            {" "}
            CONTACT US{" "}
          </NavLink>
        </div>
      </nav>

      <div className="externalLinkWrapper">
        <div>
          {" "}
          <Link to="https://www.instagram.com/eventechoucla">
            {" "}
            <img
              src={icon_ig}
              alt="Instagram logo"
              className="externalLinkItems"
            />{" "}
          </Link>{" "}
        </div>
        <div>
          {" "}
          <Link to="https://www.instagram.com/eventechoucla">
            {" "}
            <img
              src={icon_app_store}
              alt="App Store logo"
              className="externalLinkItems"
            />{" "}
          </Link>{" "}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
