// This component is imported from https://github.com/AdeleD/react-paginate
// I am not removing the original comments from this file, just refactor some code.

import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '../Card';
import css from './style.module.css';

// Example items, to simulate fetching from another resources.

const Items = ({ currentItems }:any) => {
  return (
    <div className={css.items} >
      {currentItems?.map((item:any, key:number) => <Card key={key} pokemon={item} />)}
    </div>
  );
}

interface IProps {
    pokemonsPerPage : number,
    pokemons: [];
}

const Pagination = ({ pokemons, pokemonsPerPage }:IProps) => {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + pokemonsPerPage;
  const currentItems = pokemons.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(pokemons.length / pokemonsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = ( event : any ) => {
    console.log('clicked', event);
    const newOffset = (event.selected * pokemonsPerPage) % pokemons.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={css.container}>
      <Items currentItems={currentItems} />
      <ReactPaginate
        className={css.selector}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        // @ts-ignore
        renderOnZeroPageCount={<div></div>}
      />
    </div>
  );
}

export default Pagination;