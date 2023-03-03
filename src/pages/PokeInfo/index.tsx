// common header component with the buttons menu to change pages
import Header from "../../patterns/Header";

// context api
import Context from "../../context"

// native hooks
import { useContext } from "react"

// components
import Card from "../../components/Card"

// style
import css from './style.module.css';

// types
import { IPokemonAbility, IPokemonStatus } from "../../data/@types/IPokemon";

import BGEffect from "../../components/BGEffect";


/**
 * Page containing information about the selected pokemón. 
 */
const PokeInfo = ( ) => {
  
  // getting which pokemon was selected so this component displays its info.
  const { selectedPokemon } = useContext(Context);


  return(
      <>
        <Header pageIndex={2}/>
        {

          <div className={css.info}>


            <BGEffect id={selectedPokemon?.id} />



            {/* info data ---------------------------------------- */}
            <section className={css.infoData}>
              <ul>
                <li>
                  <p>Id</p>
                  <span>{selectedPokemon
                  ?.id}</span>
                </li>
                <li>
                  <p>Order</p>
                  <span>{selectedPokemon
                  ?.order}</span>
                </li>
                <li>
                  <p>Height</p>
                  <span>{selectedPokemon
                  ?.height}</span>
                </li>
                <li>
                  <p>Weight</p>
                  <span>{selectedPokemon
                  ?.weight}</span>
                </li>
                <li>
                  <p>Base experience</p>
                  <span>{selectedPokemon
                  ?.base_experience}</span>
                </li>
              </ul>
            </section>
            {/* ------------------------------------------------- */}




            {/* card with name, image and fav btn ----------------*/}
            <section className={css.cardScaler}>
              <Card pokemon={selectedPokemon
              } hover={false}/>
            </section>
            {/* ------------------------------------------------- */}




            {/* status lists ------------------------------------- */}
            <section className={css.statusLists}>
              
              <ul>{
                  selectedPokemon
                  ?.abilities?.map((ab:IPokemonAbility, index:number) => (
                    <li key={index}> 
                      <p>{`Ability ${index+1}`}</p>
                      <span>{(ab.ability.name).split('-').join(' ')}</span>
                    </li>
                  ))
              }</ul>

              <br></br>
              
              <ul>{
                  selectedPokemon
                  ?.stats?.map((stat:IPokemonStatus, index:number) => (
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