import css from './index.module.css';

/***
 * Reurns the background effect with image, blur and dark effect.
*/
export default ( { id } : { id:number } ) => {
  return (
    <>
        <div data-bgimage className={css.bgImage} style={{backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg)`}}/>
        <div data-bgblur className={css.blur}/>
        <div data-bgdarken className={css.darken}/>
    </>
  )
}