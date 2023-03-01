// common header component with the buttons menu to change pages
import Header from "../../patterns/Header";

// context api
import Context from "../../context"

// native hooks
import { useContext, useEffect } from "react"

// components
import Card from "../../components/Card"

// style
import css from './style.module.css';

// types
import { IPokemonAbility, IPokemonStatus } from "../../data/@types/IPokemon";

/**
 * Page containing information about the selected pokemón. 
 */
const PokeInfo = ( ) => {
  
  // getting which pokemon was selected so this component displays its info.
  const { selectedPokemon } = useContext(Context);
  
  const sprite = selectedPokemon?.sprites?.other?.dream_world?.front_default;

  // debuging pokemon on init
  useEffect( ()=> console.log( selectedPokemon )  , [] )


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
              <ul>
                <li><p>{`Name: ${selectedPokemon?.name}`}</p></li>
                <li><p>{`Id: ${selectedPokemon?.id}`}</p></li>
                <li><p>{`Order: ${selectedPokemon?.order}`}</p></li>
                <li><p>{`Height: ${selectedPokemon?.height}`}</p></li>
                <li><p>{`Weight: ${selectedPokemon?.weight}`}</p></li>
                <li><p>{`Base experience: ${selectedPokemon?.base_experience}`}</p></li>
              </ul>
            </section>
            {/* ------------------------------------------------- */}




            {/* card with name, image and fav btn ----------------*/}
            <section className={css.cardScaler}>
              <Card pokemon={selectedPokemon} />
            </section>
            {/* ------------------------------------------------- */}




            {/* status lists ------------------------------------- */}
            <section className={css.statusLists}>
              
              <ul>{
                  selectedPokemon?.abilities.map((ab:IPokemonAbility, index:number) => (
                    <li> <p>{`Ability #${index+1}: ${ab.ability.name}`}</p> </li>
                  ))
              }</ul>
              <br></br>
              <ul>{
                  selectedPokemon?.stats.map((stat:IPokemonStatus, index:number) => (
                      <li> <p>{`${stat.stat.name}: ${stat.base_stat}`}</p> </li>
                  ))
              }</ul>

            </section>
            {/* ------------------------------------------------- */}
            
            

            {/* <img src={sprite} /> */}
          </div>
        }
    </> 
  )
}

export default PokeInfo