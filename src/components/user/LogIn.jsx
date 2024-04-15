import React, { useState } from 'react';
import "./StyleLogIn.css";
import Register from './Register';
import { Centrado} from '../style-components/LogIng';
import { Button } from '../style-components/LogIng';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.css';
import {exitIcon } from '../style-components/LogIng';



const LoginForm = ({ onClose }) => {
  const [registerVisible, setRegisterVisible] = useState(false);

  const toggleRegisterForm = () => {
    setRegisterVisible(!registerVisible);
    
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", username, password);
    
  };



  return (
  // <NotShowLogin>
  <div className='NotShowLogin'>
    <div className="wrapper active-popup">
      <div className="form-box login">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">Username</label>
            <span className="icon"></span>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <span className="icon"></span>
          </div>

          <div>
             <Centrado> 
              <button type="submit" className="btn">Login</button>
              
              
              <exitIcon class="fa fa-window-close" aria-hidden="true" onClick={onClose}></exitIcon>
          
           
             </Centrado> 
            
             <Button className="btn btn-outline-success" onClick={toggleRegisterForm}>
  
    
            &nbsp;
            <span> Registrate</span>

            </Button>
            {registerVisible && <Register onClose={toggleRegisterForm} />}  

          </div>
          <div>
            
          </div>

        </form>
        
        
      </div>
    </div>
    
  </div>
  // </NotShowLogin>
  );
};

export default LoginForm;