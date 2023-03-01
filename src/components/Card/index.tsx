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

// the Card will receive a pokemon as props to handle its info.
interface IProps { pokemon : IPokemon }

/**
 * Renders a Card for the pokemón.
 * Contains its name, image and a button to favorite.
 * @param pokemon must receive an IPokemon object 
 * @returns 
 */
const Card = ( { pokemon } : IProps ) => {

  // getting navigation
  const navigateTo = useNavigate();
  
  // getting states from context
  const { setSelectedPokemon , setFavPokesIds, favPokesIds} = useContext(Context);

  // getting pokemon sprite url
  const sprite : string = pokemon.sprites.other.dream_world.front_default;

  // both id and isFav states are used to handle the favorite list regarding this pokemon.
  // the id is the number state that will be pushed or removed from the list
  const [id, setId] = useState<number>();
  // the isFav state updates the visual render of the card
  const [ isFav, setIsFav ] = useState(false);

  useEffect( ()=> {
    // here, I am updating the isFav state based on favList content
    setIsFav( favPokesIds.includes(pokemon.id) );
    // also, updating the id of this card.
    setId(pokemon.id);
  }, [setIsFav, isFav, pokemon] )


  /**
   * This method opens the page for this especific pokemon,
   * showing its information.
   */
  function openPage(){
    // RouteAPI
    setSelectedPokemon(pokemon); // setting the global selected pokemon, so the custom page will load its data
    navigateTo('/info');
  }

  function toggleFav(){

    // toggling the value
    const _isFav = !isFav; 
    
    // setting the visual state
    setIsFav(_isFav);

    try{
      
      // getting the value from the storage list
      const oldFavs : number[] = favPokesIds;
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
      favList.set(newFavs); // updating the localstorage list to save the data.
      setFavPokesIds(newFavs) // context state to App update rendering.

    }
    catch(err){
      console.log(err);
    }
  }

  // rendering component
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