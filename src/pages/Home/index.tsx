import Pagination from '../../components/Pagination';
import Context from '../../context';
import { useContext } from 'react';
import Header from '../../patterns/Header';
const Home = ( ) => {
  const { pokemons } = useContext(Context);
  return (
    <>
      <Header />
      <Pagination pokemonsToShow={pokemons} pokemonsPerPage={12} /> 
    </>
  )
}

export default Home