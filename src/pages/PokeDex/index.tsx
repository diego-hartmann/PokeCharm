// pagination feature
import Pagination from "../../components/Pagination"

import BGEffect from "../../components/BGEffect";

// common header component with the buttons menu to change pages
import Header from "../../patterns/Header";

//native hoks
import { useContext } from "react";

// context api
import Context from "../../context";

/**
 * A pagination with only the favorited pokemons saved by the user. 
 */
const PokeDex = ( ) =>  
{
  // 'favPokesIds' is populated with the localStorage fav list values.
  // 'pokemons' is populated with the list from the pokeapi request.
  // both are populated ito Provider component on init
  const { favPokesIds, pokemons } = useContext(Context);
  
  return (
  <>
    <Header pageIndex={1}/>
    {/* <BGEffect id={146} /> */}
    <BGEffect id={150} />

    {/* getting only ID(number) list from pokemon objects list */}
    <Pagination pokemonsToShow={    pokemons.filter( poke => favPokesIds.includes(poke.id) )     } pokemonsPerPage={4}/>
  </>
  )
}

export default PokeDex