// style
import css from './index.module.css';

// getting routes nav
import { useNavigate } from 'react-router-dom'

/**
 * The menu containing the buttons th navigate throught the routes.
 */
const PagesMenu = () => {
  const navigateTo = useNavigate();
  return (
    <div className={css.container}>
        <p onClick={()=>navigateTo('/')} className={css.btn}>Home</p>
        <p onClick={()=>navigateTo('/pokedex')} className={css.btn}>Pokedex</p>
    </div>
  )
}

export default PagesMenu