import './App.css';
import React from 'react';
import CardList from './components/CardList/CardList';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Game from './components/Game/Game';
import Info from './components/Info/Info';
import CardsManagment from './components/CardsManagment/CardsManagment';
import {Link} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content ">
        <Routes>
          <Route path="game" element={<Game />} />
          <Route path="info" element={<Info />} />
          <Route path="cardsmanagment" element={<CardsManagment />} />
        </Routes>
      </div>
    </div>
  );
}



export default App;
