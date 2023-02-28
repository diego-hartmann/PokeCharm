interface IPokemonInfo{
    name : string,
    image : string,
    id : number,
    order : number,
    height : number,
    weight : number,
    base_experience : number,
    abilities : any[],
    stats : any[],
}
interface IPokemon{
    pokemon : IPokemonInfo,
}

const PokeInfo = ( { pokemon } : IPokemon ) => {
  return (
    <>
        <div>Name: {pokemon.name}</div>
        <img src={pokemon.image} />
        <div>Id: {pokemon.id}</div>
        <div>Order: {pokemon.order}</div>
        <div>Height: {pokemon.height}</div>
        <div>Weight: {pokemon.weight}</div>
        <div>Base experience: {pokemon.base_experience}</div>
        <div>Abilities: {pokemon.abilities}</div>
        <div>Stats: {pokemon.stats}</div>
    </>
  )
}

export default PokeInfo