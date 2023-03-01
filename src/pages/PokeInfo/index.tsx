// common header component with the buttons menu to change pages
import Header from "../../patterns/Header";

// context api
import Context from "../../context"

// native hooks
import { useContext, useEffect, useState } from "react"

// components
import Card from "../../components/Card"

// routes
import { useNavigate } from 'react-router-dom'

// style
import css from './style.module.css';

/**
 * Page containing information about the selected pokemón. 
 */
const PokeInfo = ( ) => {
  
  // getting which pokemon was selected so this component displays its info.
  const { selectedPokemon, favPokesIds } = useContext(Context);
  
  // routes
  const navigateTo = useNavigate();

  // state to check if there is a pokemon passed to this rote thorugh the selectedPokemon
  const [hasPoke, setHasPoke] = useState(selectedPokemon !== undefined);

  
  useEffect(()=>{
    // if the the user access this route and there is no pokemon selected, go back.
    if(selectedPokemon === undefined){
      navigateTo('/');
      return;
    }
    // set flag to true so it renders the component.
    setHasPoke(true);
  },[])

  return(
      <>
        <Header/>
        {
          hasPoke &&
          <div className={css.container} style={{
            backgroundImage: `url(${selectedPokemon?.sprites?.other?.dream_world?.front_default})`,
          }}>
            <div className={css.cardScaler}>
              <Card pokemon={selectedPokemon} />
            </div>
            <span>{`Name: ${selectedPokemon?.name}`}</span>
            <span>{`Id: ${selectedPokemon?.id}`}</span>
            <span>{`Order: ${selectedPokemon?.order}`}</span>
            <span>{`Height: ${selectedPokemon?.height}`}</span>
            <span>{`Weight: ${selectedPokemon?.weight}`}</span>
            <span>{`Base experience: ${selectedPokemon?.base_experience}`}</span>
            <span>{`Abilities: ${selectedPokemon?.abilities}`}</span>
            <span>{`Stats: ${selectedPokemon?.stats}`}</span>
            {/* <img src={selectedPokemon?.sprites?.other?.dream_world?.front_default} /> */}
          </div>
        }
    </> 
  )
}

export default PokeInfo