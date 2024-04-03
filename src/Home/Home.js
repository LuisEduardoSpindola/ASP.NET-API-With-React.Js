// home/HomePage.js
import React from 'react';
import mainSVG from '../assets/mainSVG.svg'; // Importe o SVG
import './Home.css'; // Importe o arquivo CSS para estilos adicionais

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="info">
          <div className="svg-container">
            <img src={mainSVG} alt="mainSVG" className="svg-image"/>
          </div>
          <br></br>
          <div className="text">
            <h1>CashierControl</h1>
            <p>O CashierControl é um sistema de Gestão de caixa para facilitar a vida dos comerciantes de Ibitirama na hora de gerenciar o negócio!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
