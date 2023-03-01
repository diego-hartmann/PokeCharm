import Context from "../../context"
import { useContext, useEffect, useState } from "react"
import Card from "../../components/Card"
import Header from "../../patterns/Header"
import { useNavigate } from 'react-router-dom'

import css from './style.module.css';

const PokeInfo = ( ) => {
  
  const { selectedPokemon } = useContext(Context);
  const navigateTo = useNavigate();

  const [hasPoke, setHasPoke] = useState(false);
  
  useEffect(()=>{
    // if the the user access this route and there is no pokemon selected, go back.
    if(selectedPokemon === undefined){
      navigateTo('/');
      return;
    }
    setHasPoke(true);
  },[])

  return(
      <>
        <Header/>
        {
          hasPoke &&
          <div className={css.container}>
            <Card pokemon={selectedPokemon} />
            <span>{`Name: ${selectedPokemon?.name}`}</span>
            <span>{`Id: ${selectedPokemon?.id}`}</span>
            <span>{`Order: ${selectedPokemon?.order}`}</span>
            <span>{`Height: ${selectedPokemon?.height}`}</span>
            <span>{`Weight: ${selectedPokemon?.weight}`}</span>
            <span>{`Base experience: ${selectedPokemon?.base_experience}`}</span>
            <span>{`Abilities: ${selectedPokemon?.abilities}`}</span>
            <span>{`Stats: ${selectedPokemon?.stats}`}</span>
            <img src={selectedPokemon?.sprites?.other?.dream_world?.front_default} />
          </div>
        }
    </> 
  )
}

export default PokeInfo