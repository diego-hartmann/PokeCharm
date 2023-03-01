// style
import css from './index.module.css';

// importing native hooks
import { useEffect, useState, useContext } from 'react';
// importing the context object
import Context from '../../context';

// hook for navigation though routes
import { useNavigate } from 'react-router-dom';

// importing the localstorage fav reference list
import { favList } from '../../utils/favList';
import { IPokemon } from '../../data/@types/IPokemon';

interface IProps { pokemon : IPokemon }

const Card = ( { pokemon } : IProps ) => {

  const navigateTo = useNavigate();
  
  const { setSelectedPokemon , setFavPokesIds} = useContext(Context);

  // other.dreamworld
  const sprite : string = pokemon.sprites.other.dream_world.front_default;


  // both id and isFav states are used to handle the favorite list regarting this pokemon.
  const [id, setId] = useState<number>();
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
    setSelectedPokemon(pokemon);
    navigateTo('/info');
  }

  function toggleFav(){

    // toggling the value
    const _isFav = !isFav; 
    
    // setting the visual state
    setIsFav(_isFav);

    try{
      
      // getting the value from the storage list
      const oldFavs : number[] = favList.get();
      // initing a new array to update the oldFavs array
      let newFavs : number[] = [];

      // adding this pokemon to fav list
      if(_isFav) {
        // adding this new pokemon into the new list.
          newFavs.push(id!!)
          // then, adding all ints content into the new array too.
          Array.from(oldFavs)?.forEach( fav => newFavs.push(fav) );
      }else{
        // otherwise, remove this pokemon from fav list
        // filtering it without the current pokemon
        newFavs = oldFavs.filter( ( item:any ) => item !== id );
      }

      // replaicing the old list with the newer one.
      favList.set(newFavs); // localstorage to PokeDex get this information 
      setFavPokesIds(newFavs) // contaxt state to App update certain features.

    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className={css.container} data-selected={isFav}>
      <div className={css.name} >{pokemon.name}</div>
      <img onClick={openPage} className={css.sprite} src={sprite} />
      <div className={css.fav}>
        <i onClick={toggleFav} className="fas fa-star"></i>
      </div>
    </div>
  )
}

export default Card