// getting routes nav
import { useNavigate } from 'react-router-dom'

// getting mui comps
import { Button, Stack } from '@mui/material';

// to get context state
import { useContext } from 'react';
import Context from '../../context';

// importing the shake animation functionality
import shakeAnim from '../../utils/shakeAnim';

/**
 * The menu containing the buttons th navigate throught the routes.
 */
const PagesMenu = ( { pageIndex } : {pageIndex:number} ) => {

  const navigateTo = useNavigate();

  // getting context state
  const { favPokesIds } = useContext(Context);
  const noneFavs = favPokesIds.length === 0;


  interface IPage{ name: string, path: string, color: string, disabled : boolean }
  const pages : IPage[] = [
    { name: 'Home',    path: '',        color: '#fff', disabled: false },
    { name: 'Pokedex', path: 'pokedex', color: '#fff', disabled:  noneFavs},
  ]

  return (
    <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">

      {/* generating list of buttons */}
      {pages.map(( page : IPage, index ) => {

        // destructing fields.
        const { name, path, color, disabled } = page;

        // flags
        const isSelected = index === pageIndex;

        // button get highlighed for selected page
        const variant = isSelected ? 'contained' : 'outlined'

        // button get different style based on flags
        const sx = {
          color, // implicit declaration
          opacity: disabled ? '0.5' : '1',
          transform: `scale(${ isSelected ? '1' : '0.9' })`,
        }

        // dinamicaly defining the method onClick based on flags
        function onClickDecorator(){

          // function for disabled button.
          if(disabled) return () => shakeAnim('pokeball');

          // function for already selected button.
          if(isSelected) return () => shakeAnim('sticker');

          // function to navigate.
          return ()=> navigateTo(`/${path}`) 
          
        }
        const onClick = onClickDecorator(); 

        // getting the button itself
        return(
          // @ts-ignore
          <Button
            key={index}
            variant={variant}
            // disabled={page.disabled} -> i will custom edit it on this sx={...} and onClick props
            sx={sx}
            onClick={onClick}
          >
            {name}
          </Button> 
          )
        })}
      </Stack>
  )
}

export default PagesMenu