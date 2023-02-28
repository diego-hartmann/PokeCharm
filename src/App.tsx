import './App.css';
import Loader from './components/Loader';
import usePokeList from './hooks/usePokeList';
import Pagination from './components/Pagination';


function App() {

  const { pokemons, isLoading, errorMessage, isSuccess } = usePokeList();


  return (
    <div className="App">
      <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" height={100}/>
        {
          isLoading && <Loader message='Getting Pokemóns list...'/>
        }
        {
          isSuccess && <Pagination pokemons={pokemons} pokemonsPerPage={12} /> 
        }
    </div>

  );
}

export default App;
