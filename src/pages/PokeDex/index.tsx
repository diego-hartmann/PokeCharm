// pagination feature
import Pagination from "../../components/Pagination"

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
  const { favPokesIds, pokemons } = useContext(Context);
  
  return (
  <>
    <Header/>
    {/* getting only ID(number) list from pokemon objects list */}
    <Pagination pokemonsToShow={    pokemons.filter( poke => favPokesIds.includes(poke.id) )     } pokemonsPerPage={4}/>
  </>
  )
}

export default PokeDex