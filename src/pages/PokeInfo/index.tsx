import Loader from "../../components/Loader"
import Context from "../../context"
import { useContext } from "react"


const PokeInfo = ( ) => {
  const { isLoading, pokemons, favPokes, setFavPokes } = useContext(Context)

  const pokemon = pokemons[0];
  return(
      isLoading ? <Loader /> :
      <>
        <div>Name: {pokemon?.name}</div>
        <img src={pokemon?.image} />
        <div>Id: {pokemon?.id}</div>
        <div>Order: {pokemon?.order}</div>
        <div>Height: {pokemon?.height}</div>
        <div>Weight: {pokemon?.weight}</div>
        <div>Base experience: {pokemon?.base_experience}</div>
        <div>Abilities: {pokemon?.abilities}</div>
        <div>Stats: {pokemon?.stats}</div>
    </> 
  )
}

export default PokeInfo