import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader';
import usePokeList from './hooks/usePokeList';
import Card from './components/Card';
import { useEffect, useState } from 'react';
import Pagination from './components/Pagination';

function App() {

  const { pokemons, isLoading, errorMessage, isSuccess } = usePokeList();


  return (
    <div className="App">
        {
          isLoading && <Loader message='Getting Pokemóns list...'/>
        }
        {
          isSuccess && <Pagination pokemons={pokemons} pokemonsPerPage={20} /> 
        }
    </div>

  );
}

export default App;
