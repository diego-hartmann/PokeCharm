// common header component with the buttons menu to change pages
import Header from "../../patterns/Header";

// context api
import Context from "../../context"

// native hooks
import { useContext, useEffect, useState } from "react"

// components
import Card from "../../components/Card"

// style
import css from './style.module.css';

/**
 * Page containing information about the selected pokemón. 
 */
const PokeInfo = ( ) => {
  
  // getting which pokemon was selected so this component displays its info.
  const { selectedPokemon } = useContext(Context);
  
  const sprite = selectedPokemon?.sprites?.other?.dream_world?.front_default;

  return(
      <>
        <Header pageIndex={2}/>
        {

          <div className={css.container}>


            {/* absolute displayed elements to apply effects ---- */}
            <div className={css.bgImage} style={{ backgroundImage: `url(${sprite})` }} />
            <div className={css.blur}/>
            <div className={css.darken}/>
            {/* ------------------------------------------------- */}




            {/* info data ---------------------------------------- */}
            <section className={css.infoData}>
              <span>{`Name: ${selectedPokemon?.name}`}</span>
              <span>{`Id: ${selectedPokemon?.id}`}</span>
              <span>{`Order: ${selectedPokemon?.order}`}</span>
              <span>{`Height: ${selectedPokemon?.height}`}</span>
              <span>{`Weight: ${selectedPokemon?.weight}`}</span>
              <span>{`Base experience: ${selectedPokemon?.base_experience}`}</span>
            </section>
            {/* ------------------------------------------------- */}




            {/* card with name, image and fav btn ----------------*/}
            <section className={css.cardScaler}>
              <Card pokemon={selectedPokemon} />
            </section>
            {/* ------------------------------------------------- */}




            {/* status lists ------------------------------------- */}
            <section className={css.statusLists}>
              {<span>{`Abilities: ${selectedPokemon?.abilities}`}</span>}
              {<span>{`Stats: ${selectedPokemon?.stats}`}</span>}
            </section>
            {/* ------------------------------------------------- */}
            
            

            {/* <img src={sprite} /> */}
          </div>
        }
    </> 
  )
}

export default PokeInfo