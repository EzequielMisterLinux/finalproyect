import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginForm  from './user/LogIn';
import { Button } from './style-components/LogIng';
const Header = () => {
  const [loginVisible, setLoginVisible] = useState(false);

  const toggleLoginForm = () => {
    setLoginVisible(!loginVisible);
  };

  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fa-solid fa-calendar-days"/>
        &nbsp;
      </span>
      <nav>
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>&nbsp;
          <li className="nav-item"><Link to="/store" className="nav-link">Store</Link></li>
          {/* Otros enlaces */}
        </ul>
      </nav>
     <Button className="btn btn-outline-success" onClick={toggleLoginForm}>
  
    
        &nbsp;
        <span> Log In </span>
  
      </Button>
      {loginVisible && <LoginForm onClose={toggleLoginForm} />}
    </div>
  );
};

export default Header;
