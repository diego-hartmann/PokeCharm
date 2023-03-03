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

// types
import { IPokemon, IPokemonAbility, IPokemonStatus } from "../../data/@types/IPokemon";

import BGEffect from "../../components/BGEffect";

// getting fallback pokemon
import { getSkeleton } from "./skeleton";


/**
 * Page containing information about the selected pokemón. 
 */
const PokeInfo = ( ) => {
  
  // getting which pokemon was selected so this component displays its info.
  const { selectedPokemon } = useContext(Context);
  
  const [currPoke, setCurrPoke] = useState<IPokemon>(selectedPokemon);
  

  useEffect(()=>{
    const skeleton = getSkeleton();
    // if there is not a selectedPokemon yet, use the skeleton.
    setCurrPoke(selectedPokemon || skeleton);
    // The Provier is trying to update the selectedPokemon while so.
  },[selectedPokemon])
  
  

  const localPokemon = currPoke;

  return(
      <>
        <Header pageIndex={2}/>
        {

          <div className={css.info}>


            <BGEffect id={localPokemon?.id} />



            {/* info data ---------------------------------------- */}
            <section className={css.infoData}>
              <ul>
                <li>
                  <p>Id</p>
                  <span>{localPokemon?.id}</span>
                </li>
                <li>
                  <p>Order</p>
                  <span>{localPokemon?.order}</span>
                </li>
                <li>
                  <p>Height</p>
                  <span>{localPokemon?.height}</span>
                </li>
                <li>
                  <p>Weight</p>
                  <span>{localPokemon?.weight}</span>
                </li>
                <li>
                  <p>Base experience</p>
                  <span>{localPokemon?.base_experience}</span>
                </li>
              </ul>
            </section>
            {/* ------------------------------------------------- */}




            {/* card with name, image and fav btn ----------------*/}
            <section className={css.cardScaler}>
              <Card pokemon={localPokemon} hover={false}/>
            </section>
            {/* ------------------------------------------------- */}




            {/* status lists ------------------------------------- */}
            <section className={css.statusLists}>
              
              <ul>{
                  localPokemon?.abilities?.map((ab:IPokemonAbility, index:number) => (
                    <li key={index}> 
                      <p>{`Ability ${index+1}`}</p>
                      <span>{(ab.ability.name).split('-').join(' ')}</span>
                    </li>
                  ))
              }</ul>

              <br></br>
              
              <ul>{
                  localPokemon?.stats?.map((stat:IPokemonStatus, index:number) => (
                      <li key={index}>
                        <p>{`${stat.stat.name}`.split('-').join(' ')}</p>
                        <span>{(stat.base_stat).toString().split('-').join(' ')}</span>
                      </li>
                  ))
              }</ul>

            </section>
            {/* ------------------------------------------------- */}

          </div>
        }
    </> 
  )
}

export default PokeInfo