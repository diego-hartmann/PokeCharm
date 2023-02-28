import logo from './logo.svg';
import './App.css';
import useGet from './hooks/useGet';

function App() {
  const { data } = useGet({endpoint:'pokemon'});
  return (
    <div className="App">
      
      {
        data.map( (element:any, index:number) => <div key={index}>{element.name}</div> )
      }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
