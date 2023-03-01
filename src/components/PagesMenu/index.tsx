// style
import css from './index.module.css';

// getting routes nav
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material';

/**
 * The menu containing the buttons th navigate throught the routes.
 */
const PagesMenu = () => {
  const navigateTo = useNavigate();
  return (
    <div className={css.container}>
        <Button onClick={()=>navigateTo('/')} >Home</Button>
        <Button onClick={()=>navigateTo('/pokedex')} >Pokedex</Button>
    </div>
  )
}

export default PagesMenu