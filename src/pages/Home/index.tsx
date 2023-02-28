import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import Header from '../../patterns/Header';
import Context from '../../context';
import { useContext } from 'react';


const Home = ( ) => {
    const { isLoading, pokemons } = useContext(Context);
  return (
    <>
        {
            isLoading ? 
            <Loader message='Getting Pokemóns list...'/>
            :
            <>
                <Header/>
                isSuccess && <Pagination pokemonsToShow={pokemons} pokemonsPerPage={12} /> 
            </>
        }
    </>
  )
}

export default Home