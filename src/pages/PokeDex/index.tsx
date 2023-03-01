import Pagination from "../../components/Pagination"
import Header from "../../patterns/Header";
import { useContext } from "react";
import Context from "../../context";
import { IPokemon } from "../../data/@types/IPokemon";
const PokeDex = ( ) =>  
{
  const { favPokesIds, pokemons } = useContext(Context);

  
  let pokes : IPokemon[] = [];
  pokemons.forEach(poke => {
    if(favPokesIds.includes(poke.id)){
      pokes.push(poke);
    }
  })

  return (
  <>
    <Header/>
    <Pagination pokemonsToShow={ pokes } pokemonsPerPage={4}/>
  </>
  )
}

export default PokeDex