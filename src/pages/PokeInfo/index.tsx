import Loader from "../../components/Loader"
import Context from "../../context"
import { useContext } from "react"
import Card from "../../components/Card"

const PokeInfo = ( ) => {
  const {isLoading, setFavPokesIds, selectedPokemon } = useContext(Context)

  return(
      isLoading ? <Loader /> :
      <>
        <Card pokemon={selectedPokemon} />

        <div>Id: {selectedPokemon?.id}</div>
        <div>Order: {selectedPokemon?.order}</div>
        <div>Height: {selectedPokemon?.height}</div>
        <div>Weight: {selectedPokemon?.weight}</div>
        <div>Base experience: {selectedPokemon?.base_experience}</div>
        <div>Abilities: {selectedPokemon?.abilities}</div>
        <div>Stats: {selectedPokemon?.stats}</div>
    </> 
  )
}

export default PokeInfo