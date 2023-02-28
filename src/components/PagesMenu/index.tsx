import css from './index.module.css';

const PagesMenu = () => {

  return (
    <div className={css.container}>
        <p className={css.btn}>Home</p>
        <p className={css.btn}>Pokedex</p>
    </div>
  )
}

export default PagesMenu