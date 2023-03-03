import { IProviderProps } from '../../data/@types/IProviderProps';
import Context from '../index';
import { useEffect, useState } from 'react';
import usePokeList from '../../hooks/usePokeList';
import { IPokemon } from '../../data/@types/IPokemon';

// importing the localstorage list reference to get and set
import { favList } from '../../utils/favList';
import { selectedPoke } from '../../utils/selectedPoke';

/**
 * The data provider to all the components to state sharing. 
 */
const Provider = ( { children }: IProviderProps ) => {

    // states coming from the custom request hook, to get all the pokemon data.
    // const { pokemons, isLoading } = usePokeList(898); // all pokemons are too many to frontend to handle
    const { pokemons, isLoading } = usePokeList(150);

    // creating a global state for favorites IDS for rerender propouses.
    // the favorite list is saved into localStorage 'fav' array,
    // so this state is first populated with 'fav' content whenever the app is initialized. 
    const [ favPokesIds, setFavPokesIds ] = useState<number[]>([]);
    
    // this state handles which pokemon was selected,
    // so a new page is open with its information.
    const [ selectedPokemon, setSelectedPokemon ] = useState<IPokemon>({} as IPokemon)

    // // whenever the app loads, it will first try to populate
    // // the selectedpokemon state with the previous one saved into local Storage.
    // // here, we are getting this local storage data. It is being setted into <Card />
    // useEffect(()=>{
    //     setSelectedPokemon(selectedPoke.get())
    // },[])
    
    useEffect(()=>{

        if(!pokemons) return () => console.log("No pokemon fetched yet.");

        // populating the state with the list  from localstorage to be passed though all the components
        setFavPokesIds(favList.get());

    }, [ pokemons ])

    return (
        <Context.Provider value={ { pokemons, favPokesIds, isLoading, setFavPokesIds, selectedPokemon, setSelectedPokemon } }>
            {children}
        </Context.Provider>
    )
}
export default Provider