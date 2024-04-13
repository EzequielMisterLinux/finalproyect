/*    import React from 'react';
    import "./index.css";
    import Store from "./store/Store";

    function App() {
        return (
            <>
                <Store/>
            </>
        );
    }

    export default App;
*/

// JonathanDev trabajando 13-04-2024
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoreC from './components/StoreC'; 
import Home from './components/Home'; 
import Header from './components/Header'; 
import './style.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/store" element={<StoreC />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;