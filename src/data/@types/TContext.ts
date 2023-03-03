import { IPokemon } from "./IPokemon"

export type TContext = {
    isLoading: boolean,
    pokemons: IPokemon[],

    favPokesIds: number[],
    setFavPokesIds: ( pokemonIds : number[] ) => void,
    
    selectedPokemon: IPokemon,
    setSelectedPokemon: (pokemon : IPokemon) => void,
}