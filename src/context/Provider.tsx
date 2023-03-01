import { IProviderProps } from '../data/@types/IProviderProps';
import Context from './index';
import { useEffect, useState } from 'react';
import usePokeList from '../hooks/usePokeList';
import { favList } from '../utils/favList';
import { IPokemon } from '../data/@types/IPokemon';

const Provider = ( { children }: IProviderProps ) => {

    const { pokemons, isLoading } = usePokeList();

    const [ favPokesIds, setFavPokesIds ] = useState<number[]>([]);
    
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