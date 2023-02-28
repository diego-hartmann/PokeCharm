// This component is imported from https://github.com/AdeleD/react-paginate
// I am not removing the original comments from this file, just refactor some code.

import { useState } from 'react';
import ReactPaginate from 'react-paginate';

// Example items, to simulate fetching from another resources.

function Items({ currentItems }:any) {
  return (
    <>
      {currentItems &&
        currentItems.map((item:any, key:number) => (
          <div key={key+1}>
            <h3>{key+1} {item.name}</h3>
          </div>
        ))}
    </>
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
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = pokemons.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(pokemons.length / pokemonsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = ( event : any ) => {
    const newOffset = (event.selected * pokemonsPerPage) % pokemons.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={()=>{}}
      />
    </>
  );
}

export default Pagination;