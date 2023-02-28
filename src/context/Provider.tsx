import { IProviderProps } from '../data/@types/IProviderProps';
import Context from './index';
import { useEffect, useState } from 'react';
import usePokeList from '../hooks/usePokeList';
import { favList } from '../utils/favList';

const Provider = ( { children }: IProviderProps ) => {

    const { pokemons, isLoading } = usePokeList();

    const [favPokes, setFavPokes] = useState<any[]>([]);

    useEffect(()=>{
        if(!pokemons) return () => console.log("No pokemon fetched yet.");
            const FavList : number[] = favList.get();
            const newList : number[] = [];
            pokemons.forEach( ( poke : any ) => {
            if(FavList.includes(poke.id)){
                newList.push(poke);
            }
        });
        setFavPokes(newList);
  }, [pokemons, favPokes])

    return (
        <Context.Provider value={ { pokemons, favPokes, isLoading, setFavPokes } }>
            {children}
        </Context.Provider>
    )
}
export default Provider