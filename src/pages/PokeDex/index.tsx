// pagination feature
import Pagination from "../../components/Pagination"

// common header component with the buttons menu to change pages
import Header from "../../patterns/Header";

//native hoks
import { useContext, useEffect, useState } from "react";

// context api
import Context from "../../context";

// types
import { IPokemon } from "../../data/@types/IPokemon";

// importing the localStorage helper for the favorite list of pokemons.
import { favList } from "../../utils/favList";

/**
 * A pagination with only the favorited pokemons saved by the user. 
 */
const PokeDex = ( ) =>  
{
  // getting global data from context.
  // Also, getting favPokesIds for rerender component propouses.
  // the favorite list data itself is being handled by LocalStorage (favList imported object).
  const { favPokesIds, pokemons } = useContext(Context);
  const [ generatedPokeList, setGeneratedPokeList ] = useState<IPokemon[]>(pokemons.filter(poke => favList.get().includes(poke.id)))

  useEffect( ()=> {
    // getting ids list from local storage from favorites pokemons
    const favs = favList.get()
    //generating a new pokemon list based on the id list from the LOCALSTORGE
    const pokes : IPokemon[] = pokemons.filter(poke => favs.includes(poke.id))
    setGeneratedPokeList(pokes);

    // using the glocal state favPokesIds in dependencies so 
    // the pokemon disapears from the pokedex at real time when removing it from favorite list from localstorage.
  }, [favPokesIds])
  

  return (
  <>
    <Header/>
    <Pagination pokemonsToShow={ generatedPokeList } pokemonsPerPage={4}/>
  </>
  )
}

export default PokeDex