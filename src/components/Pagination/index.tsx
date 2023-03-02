// native hooks
import { useState } from 'react';

// This Component is imported from https://github.com/AdeleD/react-paginate
import ReactPaginate from 'react-paginate';
import './selected.css' // plain css to fit the fixed classnames from the ReactPaginate elements

// Card component to serve as an item of the list
import Card from '../Card';

// styles
import css from './style.module.css';

// types
import { IPokemon } from '../../data/@types/IPokemon';


// the list of Cards for the pokemóns, based on the current pokemons on pagination
const Cards = ({ currentItems }:any) => {
  return (
    <div className={css.items} >
      {currentItems?.map((item:any, key:number) => <Card key={key} pokemon={item} hover={true} />)}
    </div>
  );
}

interface IProps {
    pokemonsPerPage : number,
    pokemonsToShow: IPokemon[],
}

/**
 * Component that renders the pagination to be used in any page.
 * @param pokemonsToShow receives a list of pokemons to be showed. 
 * @param pokemonsPerPage defines max number of pokemons to be shown in each page. 
 * @returns the pagination component.
 */
const Pagination = ({ pokemonsToShow, pokemonsPerPage }:IProps) => {

  // pagination limit
  const [itemOffset, setItemOffset] = useState(0);
  
  // limit based on pokemon
  const endOffset = itemOffset + pokemonsPerPage;
  
  // pokemons showed in current page based on the above data. 
  const currentPokemons = pokemonsToShow.slice(itemOffset, endOffset);
  
  // number of pages based on the pokemons number and their distribuition
  const pageCount = Math.ceil(pokemonsToShow.length / pokemonsPerPage);


  // When the user clicks another page number.
  const handlePageClick = ( event : any ) => {
    // updates the offset of the pagination so it displays new pokemons on 'currItems' props from <Cards/>
    const newOffset = (event.selected * pokemonsPerPage) % pokemonsToShow.length;
    setItemOffset(newOffset);
  };


  // component itself.
  return (
    <div className={css.container}>

      <Cards currentItems={currentPokemons} />
      <ReactPaginate
        className={css.selector}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        // @ts-ignore
        renderOnZeroPageCount={()=>{}}
      />
    </div>
  );
}

export default Pagination;