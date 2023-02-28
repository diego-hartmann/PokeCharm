import { useEffect, useState } from 'react';
import './App.css';
import usePokeList from './hooks/usePokeList';
import Home from './pages/Home';
import { favList } from './utils/favList';

import MyPokedex from './pages/MyPokedex';

function App() {

  const { pokemons, isLoading } = usePokeList();

  const [favPokes, setFavPokes] = useState<any[]>([]);

  
  useEffect(()=>{
    
    if(!pokemons) return () => console.log("No pokemon fetched yet.");

    const FavList : any[] = favList.get();
    const newList : any[] = [];
    pokemons.forEach( ( poke : any ) => {
      if(FavList.includes(poke.id)){
        newList.push(poke);
      }
    });

    setFavPokes(newList);

  }, [pokemons, favPokes])

  return (
    <div className="App">
      {/* <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" height={100}/> */}
      
      {/* <Home isLoading={isLoading} pokemons={pokemons} /> */}
      <Home isLoading={isLoading} pokemons={pokemons} />
      <MyPokedex isLoading={isLoading} pokemons={favPokes}/>

    </div>

  );
}

export default App;
