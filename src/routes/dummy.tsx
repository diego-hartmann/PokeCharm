import Home from "../pages/Home";
// importing pages to add to route system
import PokeInfo from "../pages/PokeInfo";
import PokeDex from "../pages/PokeDex";

export const routes = [
    {
        path: "/",
        comp: Home
    },
    {
        path: "/pokedex",
        comp: PokeDex
    },
    {
        path: "/info",
        comp: PokeInfo
    }
]