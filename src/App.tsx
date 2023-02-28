import logo from './logo.svg';
import './App.css';
import useGet from './hooks/useGet';

function App() {
  const { data, isLoading, errorMessage, isSuccess } = useGet('pokemon');
  return (
    <div className="App">
        {
          isSuccess && data?.map( (element:any, index:number) => <div key={index}>{element.name}</div> )
        }
    </div>

  );
}

export default App;
