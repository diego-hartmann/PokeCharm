import { IPokemon } from "./IPokemon"

export type TContext = {
    pokemons : IPokemon[],
    favPokes : IPokemon[],
    isLoading : boolean,
    setFavPokes: ( pokemons : IPokemon[] ) => void;
}