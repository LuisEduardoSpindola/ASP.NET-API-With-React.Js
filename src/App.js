// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from './assets/Logo/Logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Home/Home';
import ListNotes from './Notes/List'
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');
  const buttonClass = theme === 'dark' ? 'btn btn-outline-warning' : 'btn btn-outline-dark';
  const buttonTheme = theme === 'dark' ? 'Tema Claro' : 'Tema Escuro';


  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    <div className={`App ${theme}`}>
      <header>
        <div className='logo-container'>
          <img className='logo-img' src={Logo} alt="Logo" />
        </div>
        <button className={buttonClass} onClick={toggleTheme}>{buttonTheme}</button>
      </header>
      <HomePage />
      <ListNotes />
    </div>
  );
}

export default App;
