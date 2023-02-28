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
  
  const getFavList = () => {  
    // @ts-ignore
    return JSON.parse(localStorage.getItem("favs"))
  }

  const setFavList = ( value : string[] ) => {
    localStorage.setItem("favs", JSON.stringify(value));
  }

  const pokeExistsOnList = getFavList()?.includes(pokemon.name);

  useEffect(()=>{
    // @ts-ignore
    setIsFav(pokeExistsOnList);
  },[])


  function openPage(){
    // RouteAPI
    console.clear();
    // console.log(pokemon);
    console.log(pokemon.name);
    console.log(front_default_dreamworld);
    console.log(pokemon.id);
    console.log(pokemon.order);
    console.log(pokemon.height);
    console.log(pokemon.weight);
    console.log(pokemon.base_experience);
    console.log(pokemon.abilities);
    console.log(pokemon.stats);
  }

  function toggleFav(){

    const _isFav = !isFav; 
    
    // setting the visual state
    setIsFav(_isFav);

    try{
      
      // adding this pokemon from fav list
      if(_isFav) {
        if(pokeExistsOnList) return;
        const oldFavs : [] = getFavList();
        let newFavs = [];
        newFavs.push(pokemon.name)
        oldFavs && Array.from(oldFavs)?.forEach(fav => newFavs.push(fav));
        localStorage.setItem("favs", JSON.stringify(newFavs))
        setFavList(newFavs);
        return;
      };

      // otherwise, remove this pokemon from fav list
      if(!pokeExistsOnList) return;
      const newList = getFavList();
      let _newFavs = newList.filter((item:any)=> item !== pokemon.name);
      setFavList(_newFavs);

    }catch(err){
      console.log(err);
    }
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