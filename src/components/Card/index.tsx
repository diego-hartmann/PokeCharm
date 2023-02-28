import css from './index.module.css';
import { useEffect, useState } from 'react';
import { favList } from '../../utils/favList';

interface IProps { pokemon : any }
const Card = ( { pokemon } : IProps ) => {
  
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


  // both id and isFav states are used to handle the favorite list regarting this pokemon.
  const [id, setId] = useState<number|null>(null);
  const [ isFav, setIsFav ] = useState(false);

  useEffect( ()=> {
    // here, I am updating the isFav state based on othe content of storage.favList.
    setIsFav( favList.get()?.includes(pokemon.id) );
    // also, updating the id based on the pokemon obj passed by props.
    setId(pokemon.id);
  }, [setIsFav, isFav, pokemon] )


  /**
   * This method opens the page for this especific pokemon,
   * showing its information.
   */
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

    // toggling the value
    const _isFav = !isFav; 
    
    // setting the visual state
    setIsFav(_isFav);

    try{
      
      // getting the value from the storage list
      const oldFavs = favList.get();
      // initing a new array to update the oldFavs array
      let newFavs = [];

      // adding this pokemon to fav list
      if(_isFav) {
        // adding this new pokemon into the new list.
          newFavs.push(id)
          // then, adding all ints content into the new array too.
          Array.from(oldFavs)?.forEach(fav => newFavs.push(fav));
      }else{
        // otherwise, remove this pokemon from fav list
        // filtering it without the current pokemon
        newFavs = oldFavs.filter( ( item:any ) => item !== id );
      }

      // replaicing the old list with the newer one.
      favList.set(newFavs); 

    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className={css.container} data-selected={isFav}>
      <div className={css.name} >{pokemon.name}</div>
      <img onClick={openPage} className={css.sprite} src={front_default_dreamworld} />
      <div className={css.fav}>
        <i onClick={toggleFav} data-selected={isFav} className="fas fa-star"></i>
      </div>
    </div>
  )
}

export default Card