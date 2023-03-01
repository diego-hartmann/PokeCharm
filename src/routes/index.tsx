import Home from "../pages/Home";
// importing pages to add to route system
import PokeInfo from "../pages/PokeInfo";
import PokeDex from "../pages/PokeDex";

// route api components
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * Routes with all the pages needed.
 * @returns the route system to wrap the application.
 */
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