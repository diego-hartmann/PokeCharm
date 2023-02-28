import Loader from "../components/Loader"


interface IPokemon{
  pokemons : any,
    isLoading : boolean,
}


const PokeInfo = ( { pokemons, isLoading, } : IPokemon ) => {
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