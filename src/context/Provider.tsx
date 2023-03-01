import { IProviderProps } from '../data/@types/IProviderProps';
import Context from './index';
import { useEffect, useState } from 'react';
import usePokeList from '../hooks/usePokeList';
import { IPokemon } from '../data/@types/IPokemon';

// importing the localstorage fav list reference to get and set
import { favList } from '../utils/favList';

const Provider = ( { children }: IProviderProps ) => {

    // states coming from the custom request hook, to get all the pokemon data.
    const { pokemons, isLoading } = usePokeList();

    // creating a global state for favorites IDS for rerender propouses.
    // the content managment is handled by localStorage.
    // This state itself is first populated with the localStorage fav list 
    const [ favPokesIds, setFavPokesIds ] = useState<number[]>([]);
    
    // this state handles which pokemon was selected,
    // so a new page is open with its information.
    const [ selectedPokemon, setSelectedPokemon ] = useState<IPokemon>({} as IPokemon)

    useEffect(()=>{
        if(!pokemons) return () => console.log("No pokemon fetched yet.");
        const FavList : number[] = favList.get();
        setFavPokesIds(FavList);
  }, [ pokemons ])

    return (
        <Context.Provider value={ { pokemons, favPokesIds, isLoading, setFavPokesIds, selectedPokemon, setSelectedPokemon } }>
            {children}
        </Context.Provider>
    )
}
export default Provider