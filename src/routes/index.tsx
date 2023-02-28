import Home from "../pages/Home";
import PokeInfo from "../pages/PokeInfo";
import PokeDex from "../pages/PokeDex";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/pokedex" element={ <PokeDex /> } />
          <Route path="/info" element={ <PokeInfo/> } />
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RoutesApp;