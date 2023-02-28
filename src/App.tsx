import './App.css';
import Loader from './components/Loader';
import usePokeList from './hooks/usePokeList';
import Pagination from './components/Pagination';
import Logo from './components/Logo'

function App() {

  const { pokemons, isLoading, errorMessage, isSuccess } = usePokeList();


  const pokemonNames = pokemons.map((item:any) => item.name);
  const favoritesPokemons = pokemonNames.filter((name:any) => localStorage.getItem("favs")?.includes(name))


  return (
    <div className="App">
      
      {/* FAVORITES */}
      
      {/* <Pagination pokemons={favoritesPokemons} pokemonsPerPage={12} */}
      
      
      {/* ALL OF THEM  */}
      {/* <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png" height={100}/> */}
      {
        isLoading ? 
          <Loader message='Getting Pokemóns list...'/>
          :
          <>
            <Logo />
            isSuccess && <Pagination pokemons={pokemons} pokemonsPerPage={12} /> 
          </>
      }
    
    </div>

  );
}

export default App;
