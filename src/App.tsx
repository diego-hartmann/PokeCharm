import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader';
import usePokeList from './hooks/usePokeList';
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {

  const { pokemons, isLoading, errorMessage, isSuccess } = usePokeList();


  return (
    <div className="App">
        {
          isLoading ? <Loader message='Getting Pokemóns list...'/>
          : isSuccess && pokemons.map( ( pokemon:any, index:number ) => <Card key={index} pokemon={pokemon}/> )
        }

    </div>

  );
}

export default App;
