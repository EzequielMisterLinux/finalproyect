import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StoreC from './components/StoreC'; 
import Home from './components/Home'; 
import Header from './components/Header'; 
import Dashboard from './vendor/Dashboard'; // Asumiendo que tienes un componente Dashboard
import './style.css';

const App = () => {
  
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/store" element={<StoreC />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> {/* Nueva ruta para el dashboard */}
        </Routes>
        <Link to="/dashboard" className="btn btn-primary">Pasar al Dashboard</Link> {/* Botón para ir al dashboard */}
      </div>
    </Router>
  );
};

export default App;
