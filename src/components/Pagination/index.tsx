// native hooks
import { useEffect, useState } from 'react';

// This Component is imported from https://github.com/AdeleD/react-paginate
import ReactPaginate from 'react-paginate';
import './selected.css' // plain css to fit the fixed classnames from the ReactPaginate elements

// Card component to serve as an item of the list
import Card from '../Card';

// styles
import css from './style.module.css';

// types
import { IPokemon } from '../../data/@types/IPokemon';
import { IUpdateFilterList } from '../../data/@types/IUpdateFilterList';

// mui based component to search for pokemons
import SearchBar from './SearchBar';

// the list of Cards for the pokemóns, based on the current pokemons on pagination
const Cards = ({ currentItems }: any) => {
  return (
    <div role='list' className={css.items}>
      {currentItems?.map((item: any, key: number) => (
        <Card
          key={key}
          pokemon={item}
          hover={true}
        />
      ))}
    </div>
  );
};

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

  // filtered pokemons
  const [filtered, setFiltered] = useState<IPokemon[]>(pokemonsToShow);

  // pagination limit
  const [itemOffset, setItemOffset] = useState(0);
  
  // limit based on pokemon
  const endOffset = itemOffset + pokemonsPerPage;
  
  // pokemons showed in current page based on the above data. 
  const currentPokemons = filtered?.slice(itemOffset, endOffset) || [] as IPokemon[];
  
  // number of pages based on the pokemons number and their distribuition
  const pageCount = Math.ceil(filtered.length / pokemonsPerPage);

  /** Sanitize strings removing empty space and convert to lower case. */
  const sanitize = ( text : string ) => text.trim().toLowerCase();

  /** This function updates the filtered pokemon list to show on pagination. */

  const updateFiltered = ( content : string ) : IUpdateFilterList => {

    if(content == ''){
      setFiltered(pokemonsToShow);
      return {
        color: 'primary',
        label: 'Search pokemón...'
      }
    } 

    // creating filtered list based on parameter text
    const filteredList:IPokemon[] = pokemonsToShow.filter( ( currPokemon : IPokemon ) => {
      // add only the pokemon whose name contains the text into textField. 
      if(sanitize(currPokemon.name).includes(sanitize(content))){
        return currPokemon;
      }
    });

    if(filteredList.length === 0){
      setFiltered(pokemonsToShow);  
      return {
        color: 'error',
        label: 'No pokemón found.'
      }
    }

    setFiltered(filteredList);
    return {
      color: 'success',
      label: `${filteredList.length} pokemón${filteredList.length > 1 ? 's' : ''} found.`
    }

  }

  // When the user clicks another page number.
  const handlePageClick = ( event : any ) => {
    // updates the offset of the pagination so it displays new pokemons on 'currItems' props from <Cards/>
    const newOffset = (event.selected * pokemonsPerPage) % filtered.length;
    setItemOffset(newOffset);
  };


  // updating the filtered list default value
  // whenever a pokemon is added or removed from the pagination list
  // eg. a pokemon is removed from the pokedex
  useEffect( ( ) => {
    setFiltered( pokemonsToShow );
  }, [ pokemonsToShow ] )


  // component itself.
  return (
    
    <div  className={css.container}>

      <div style={{alignSelf:'center'}}>
        <SearchBar onChange={ e => updateFiltered(e.target.value) } />
      </div>

      <Cards currentItems={currentPokemons} />

      <ReactPaginate
        className={css.selector}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount || 0}
        previousLabel="<"
        // @ts-ignore
        renderOnZeroPageCount={<></>}
      />
    </div>
  );
}

export default Pagination;