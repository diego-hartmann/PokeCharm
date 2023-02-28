import Pagination from "../components/Pagination"
import Header from "../patterns/Header";
import { useContext } from "react";
import Context from "../context";
const MyPokedex = ( ) =>  
{
  const { favPokes } = useContext(Context);
  return (
  <>
    <Header/>
    <Pagination pokemonsToShow={ favPokes } pokemonsPerPage={4}/>
  </>
  )
}

export default MyPokedex