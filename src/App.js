import './App.css';
import React from 'react';
import Header from './Header';
import CardList from './CardList';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Game from './components/Game/Game';
import Info from './components/Info/Info';

function App() {

  return (
    <div>
    <div className="App">
      <Header/>
      <CardList/>
    </div>
    <div color='#FF0000'>
      <Routes>
        <Route path="game" element={<Game />} />
        <Route path="info" element={<Info />} />
      </Routes>
    </div>

    </div>
  );
}



export default App;
