import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import Header from '../patterns/Header';


interface IProps{
    isLoading: boolean;
    pokemons: any[],
}

const Home = ( appState : IProps ) => {
  return (
    <>
        {
            appState.isLoading ? 
            <Loader message='Getting Pokemóns list...'/>
            :
            <>
                <Header/>
                isSuccess && <Pagination pokemons={appState.pokemons} pokemonsPerPage={12} /> 
            </>
        }
    </>
  )
}

export default Home