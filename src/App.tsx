import logo from './logo.svg';
import './App.css';
import useGet from './hooks/useGet';
import Loader from './components/Loader';

function App() {
  const { data, isLoading, errorMessage, isSuccess } = useGet('pokemon');
  return (
    <div className="App">
      <Loader message='Getting Pokémons' />
      {
        isLoading && <Loader message='Fetching pokemón list' />
      }
        {
          isSuccess && data?.map( (element:any, index:number) => <div key={index}>{element.name}</div> )
        }
    </div>

  );
}

export default App;
