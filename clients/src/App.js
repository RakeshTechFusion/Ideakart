// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
// import About from './page/about/About';
import React from 'react';
import Contactpage from './page/contact/Contactpage';
// import {Footer} from './components/Footer'

function App() {
  return (
    <div className="App">
      {/* <About/> */}
      <BrowserRouter>
      <Contactpage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
