import React, { useState } from 'react';
import "./StyleLogIn.css";
import { Centrado} from '../style-components/LogIng';
import { Button } from '../style-components/LogIng';

const Register = ({ onClose }) => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const [email, setEmail]=useState('');
const [fullname, setFullname]=useState('');
const [address, setAddress]=useState('');




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", username, password);
};

    
    
  const NotShowLogin = () => {
    styled.NotShowLogin()
  }

  return (

    <div className="wrapper active-popup">
      <div className="form-box login">
        <h2>Registrarse</h2>
      
        <form onSubmit={handleSubmit}>
        <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <span className="icon"></span>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
            <label htmlFor="username">Fullname</label>
            <span className="icon"></span>
          </div>
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
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="password">Password</label>
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
              <button type="submit" className="btn">Register</button>
              <button className="btn" onClick={onClose}>Close Register</button>
          
           
             </Centrado> 
            

          </div>
          <div>
            
          </div>

        </form>
        
        
      </div>
    </div>

  );
};

export default Register;


