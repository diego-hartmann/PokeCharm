import css from './index.module.css';

export default ( { id } : { id:number } ) => {
  return (
    <>
        <div className={css.bgImage} style={{backgroundImage: `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg)`}}/>
        <div className={css.blur}/>
        <div className={css.darken}/>
    </>
  )
}