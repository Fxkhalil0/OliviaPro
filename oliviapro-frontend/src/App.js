import React , { useState , useEffect } from 'react';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TheSpinner from './Pages/Components/Spinner/Spinner'
import Services from './Pages/Services/Services';
import PricingTable from './Pages/PricingTable/PricingTable';


function App() {
  const [loading, setLoading] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false); 
        }, 9000);
    
        return () => clearTimeout(timer);
      }, []);
  return (
    <>
      <BrowserRouter>
      {loading && <TheSpinner />}
        <Routes>
          <Route index element={<Home setLoading={setLoading} />} path="/" />
          <Route index element={<Home setLoading={setLoading} />} path="/home" />
          <Route index element = {<About setLoading={setLoading} />} path='/about' />
          <Route index element = {<Services setLoading={setLoading} />} path='/services' />
          <Route index element = {<PricingTable setLoading={setLoading} />} path='/pricing-table' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
