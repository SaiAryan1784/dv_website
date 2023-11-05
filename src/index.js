import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Home';
import Event from './Components/Event';
import About from './Components/About';
import Contact from './Components/Contact';
import Team from './Components/teams';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    {/* <App/> */}
    <Event/>
    <About/>
    <Contact/>
    <Team/>
  </React.StrictMode>
);


