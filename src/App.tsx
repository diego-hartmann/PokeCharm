import { useEffect, useState } from 'react';
import './App.css';
import usePokeList from './hooks/usePokeList';
import Home from './pages/Home';
import { favList } from './utils/favList';

import MyPokedex from './pages/MyPokedex';
import PokeInfo from './pages/PokeInfo';

import Context from './context';

function App() {

  return (
    <div className="App">

      {/* <Routes> */}
        <Home />
        <MyPokedex/>
        {/* <PokeInfo/> */}
      {/* </Routes> */}
      

    </div>

  );
}

export default App;
