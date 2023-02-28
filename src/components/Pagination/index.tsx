// This component is imported from https://github.com/AdeleD/react-paginate
// I am not removing the original comments from this file, just refactor some code.

import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Card from '../Card';
import css from './style.module.css';
import './selected.css'
import { IPokemon } from '../../data/@types/IPokemon';
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
    pokemonsToShow: IPokemon[],
}

const Pagination = ({ pokemonsToShow, pokemonsPerPage }:IProps) => {

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + pokemonsPerPage;
  const currentItems = pokemonsToShow.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(pokemonsToShow.length / pokemonsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = ( event : any ) => {
    const newOffset = (event.selected * pokemonsPerPage) % pokemonsToShow.length;
    setItemOffset(newOffset);
    console.log(event.selected)

    // const container = document.querySelector('[aria-label="Pagination"]');
    // const selected = container?.querySelector('.selected');
    // selected.style
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
        renderOnZeroPageCount={()=>{}}
      />
    </div>
  );
}

export default Pagination;