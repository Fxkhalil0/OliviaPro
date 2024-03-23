import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} path="/" />
          <Route index element={<Home />} path="/home" />
          <Route index element = {<About />} path='/about' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
