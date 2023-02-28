import css from './index.module.css';
import { useEffect, useState } from 'react';

interface IProps {
  pokemon:any
}
const Card = ( { pokemon } : IProps ) => {
  const name : string = pokemon.name;
  
  // default
  const front_default : string = pokemon.sprites.front_default;
  const back_default : string = pokemon.sprites.back_default;
  
  // shiny
  const front_shiny : string = pokemon.sprites.front_shiny;
  const back_shiny : string = pokemon.sprites.back_shiny;

  // other.dreamworld
  const front_default_dreamworld : string = pokemon.sprites.other.dream_world.front_default;

  // other.home
  const front_default_home : string = pokemon.sprites.other.home.front_default;
  const front_shiny_home : string = pokemon.sprites.other.home.front_shiny;

  // other.official-artwork
  const front_default_art : string = pokemon.sprites.other['official-artwork'].front_default;
  const front_shiny_art : string = pokemon.sprites.other['official-artwork'].front_shiny;

  const [ isFav, setIsFav ] = useState(false);

  useEffect(()=>{
    // localStorage.getItem(pokemon)
    // setIsFav(localstorage)
  },[])

  function openPage(){
    // RouteAPI
    console.log(pokemon);
  }

  function toggleFav(){
    const newValue = !isFav; 

    // newValue ? localStorage.addItem("") : localStorage.removeItem({});

    setIsFav(newValue);
  }

  return (
    <div className={css.container} data-selected={isFav}>
      <div className={css.name} >{name}</div>
      <img onClick={openPage} className={css.sprite} src={front_default_dreamworld} />
      <div className={css.fav}>
        <i onClick={toggleFav} data-selected={isFav} className="fas fa-star"></i>
      </div>
    </div>
  )
}

export default Card