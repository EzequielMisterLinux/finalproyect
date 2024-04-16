import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Navbar from './Navbar';
import Button from './Button';

=======
import LoginForm  from './user/LogIn';
import { Button } from './style-components/LogIng';
>>>>>>> 414962ba87b6a5d81f528c2fe40129887719dc8e
const Header = () => {
  const [loginVisible, setLoginVisible] = useState(false);

  const toggleLoginForm = () => {
    setLoginVisible(!loginVisible);
  };

  return (
<<<<<<< HEAD
    // <div className="navbar navbar-dark bg-dark mb-4 px-4">
    //   <span className="navbar-brand">
    //     <i className="fa-solid fa-calendar-days"/>
    //     &nbsp;
    //   </span>
    //   <nav>
    //     <ul className="navbar-nav">
    //       <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>&nbsp;
    //       <li className="nav-item"><Link to="/store" className="nav-link">Store</Link></li>
    //       {/* Otros enlaces */}
    //     </ul>
    //   </nav>
    //   <button className="btn btn-outline-danger">
    //     <i className="fa-solid fa-right-from-bracket"/>
    //     &nbsp;
    //     <span> Salir </span>
    //   </button>
    // </div>
    <Navbar />
=======
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
     <Button className="btn btn-outline-success" onClick={toggleLoginForm}>
  
    
        &nbsp;
        <span> Log In </span>
  
      </Button>
      {loginVisible && <LoginForm onClose={toggleLoginForm} />}
    </div>
>>>>>>> 414962ba87b6a5d81f528c2fe40129887719dc8e
  );
};

export default Header;
