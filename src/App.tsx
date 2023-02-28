import logo from './logo.svg';
import './App.css';
import Loader from './components/Loader';
import usePokeList from './hooks/usePokeList';
import Card from './components/Card';
function App() {

  const { pokemons, isLoading, errorMessage, isSuccess } = usePokeList(33);


  
  return (
    <div className="App">
        <>
        {isLoading && <Loader/>}
        
        {isSuccess && pokemons.map( (pokemon:any, index:number) => {
          console.log(pokemon)
          return(
            <Card key={index} pokemon={pokemon}/>
          )  
        }) }

        </>
    </div>

  );
}

export default App;
