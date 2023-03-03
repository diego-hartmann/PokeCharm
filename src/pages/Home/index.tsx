// pagination feature
import Pagination from '../../components/Pagination';

import BGEffect from '../../components/BGEffect';

// context api
import Context from '../../context';

import { useContext } from 'react';

// common header component with the buttons menu to change pages
import Header from '../../patterns/Header';
import Loader from '../../components/Loader';

/**
 * The homepage containing the list of all pokemón fetched into pagination.
 */
const Home = ( ) => {
  
  // getting global pokemons list state setted on provider
  const { pokemons, isLoading } = useContext(Context);
  
  return (
    <>
      {
        isLoading ? 
          <Loader /> 
          : 
          <>
            <Header pageIndex={0}/>
            <BGEffect id={5} />
            <Pagination pokemonsToShow={pokemons} pokemonsPerPage={6} /> 
          </>
      }
    </>
  )
}

export default Home