import './App.css';
import Loader from './components/Loader';
import usePokeList from './hooks/usePokeList';
import Pagination from './components/Pagination';
import { useEffect } from 'react';


function App() {

  const { pokemons, isLoading, errorMessage, isSuccess } = usePokeList();


  return (
    <div className="App">
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
