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
import { selectedPoke } from "../../utils/selectedPoke";


/**
 * Page containing information about the selected pokemón. 
 */
const PokeInfo = ( ) => {
  
  // getting which pokemon was selected so this component displays its info.
  const { selectedPokemon  } = useContext(Context);
  
  const sprite = selectedPokemon?.sprites?.other?.dream_world?.front_default;

  // getting the copy of the selectedPokemon, of from the local storage.
  // this is the internal pokemon obj to handle its info.
  const [localPoke, setLocalPoke] = useState<IPokemon>(selectedPokemon);

  // if there is no pokemon into state, get it from local storage.
  useEffect( ()=>{
  
    // setLocalPoke(selectedPokemon ?? selectedPoke.get());
    // ^ not working ^

    setLocalPoke(selectedPokemon);
  
  }, [])

  return(
      <>
        <Header pageIndex={2}/>
        {

          <div className={css.info}>


            <BGEffect id={localPoke?.id} />



            {/* info data ---------------------------------------- */}
            <section className={css.infoData}>
              <ul>
                <li>
                  <p>Id</p>
                  <span>{localPoke?.id}</span>
                </li>
                <li>
                  <p>Order</p>
                  <span>{localPoke?.order}</span>
                </li>
                <li>
                  <p>Height</p>
                  <span>{localPoke?.height}</span>
                </li>
                <li>
                  <p>Weight</p>
                  <span>{localPoke?.weight}</span>
                </li>
                <li>
                  <p>Base experience</p>
                  <span>{localPoke?.base_experience}</span>
                </li>
              </ul>
            </section>
            {/* ------------------------------------------------- */}




            {/* card with name, image and fav btn ----------------*/}
            <section className={css.cardScaler}>
              <Card pokemon={localPoke} hover={false}/>
            </section>
            {/* ------------------------------------------------- */}




            {/* status lists ------------------------------------- */}
            <section className={css.statusLists}>
              
              <ul>{
                  localPoke?.abilities?.map((ab:IPokemonAbility, index:number) => (
                    <li key={index}> 
                      <p>{`Ability ${index+1}`}</p>
                      <span>{(ab.ability.name).split('-').join(' ')}</span>
                    </li>
                  ))
              }</ul>

              <br></br>
              
              <ul>{
                  localPoke?.stats?.map((stat:IPokemonStatus, index:number) => (
                      <li key={index}>
                        <p>{`${stat.stat.name}`.split('-').join(' ')}</p>
                        <span>{(stat.base_stat).toString().split('-').join(' ')}</span>
                      </li>
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