import React from 'react';
import './Nav.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand">My App</div>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" onClick={()=>navigate('/Home')}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>navigate('/About')}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>navigate('/Cart')}>Cart</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>navigate('/Login')}>Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
