import Pagination from "../components/Pagination"
import Header from "../patterns/Header";

interface IProps{
  isLoading: boolean;
  pokemons: any[],
}

const MyPokedex = ( appSate : IProps) => {
  return (
    <>
      <Header/>
      <Pagination pokemons={appSate.pokemons} pokemonsPerPage={4}/>
    </>
  )
}

export default MyPokedex