// getting routes nav
import { useNavigate } from 'react-router-dom'

// getting mui comps
import { Button, Stack } from '@mui/material';


const pages = [
  {
    name: 'Home',
    path: '',
    color: '#fff',
  },
  {
    name: 'Pokedex',
    path: 'pokedex',
    color: '#fff',
  },
]


/**
 * The menu containing the buttons th navigate throught the routes.
 */
const PagesMenu = ( { pageIndex } : {pageIndex:number} ) => {

  const navigateTo = useNavigate();

  return (
    <Stack spacing={2} direction="row" alignItems="center" justifyContent="center">
      {pages.map(( page, index ) => {
        // button get highlighed for selected page
        const variant = index === pageIndex ? 'contained' : 'outlined'
        return(
          // @ts-ignore
          <Button
            key={index}
            variant={variant}
            sx={{color:page.color}}
            onClick={()=>navigateTo(`/${page.path}`)}
          >
            {page.name}
          </Button> 
          )
        })}
      </Stack>
  )
}

export default PagesMenu