import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fa-solid fa-calendar-days"/>
        &nbsp;
        Proyecto-Fusalmo
      </span>
      <nav>
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>&nbsp;
          <li className="nav-item"><Link to="/store" className="nav-link">Store</Link></li>
          {/* Otros enlaces */}
        </ul>
      </nav>
      <button className="btn btn-outline-danger">
        <i className="fa-solid fa-right-from-bracket"/>
        &nbsp;
        <span> Salir </span>
      </button>
    </div>
  );
};

export default Header;