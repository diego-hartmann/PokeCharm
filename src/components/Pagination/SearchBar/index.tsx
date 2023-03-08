// mui components
import { TextField } from '@mui/material';

// native hooks
import { useState } from 'react';

// types
import { IUpdateFilterList } from '../../../data/@types/IUpdateFilterList';
import { IPokemon } from '../../../data/@types/IPokemon';
interface IProps {
    allPokes : IPokemon[],
    setFiltered : (pokes:IPokemon[]) => void
}

/**
 * Component that renders a search bar to filter pokemóns.
 * @date 3/8/2023 - 5:23:06 PM
 *
 * @param {IProps} { onChange } function called when text value is changed.
 * @returns TextField MUI component.
 */
const SearchBar = ( { setFiltered, allPokes } : IProps ) => {

    // holds the config for the label text and input variant
    const [filterStatus, setFilterStatus] = useState<IUpdateFilterList>( { color: 'primary', label: 'Search pokemón...' } );
  

     /** Sanitize strings removing empty space and convert to lower case. */
    const sanitize = ( text : string ) => text.trim().toLowerCase();

    /** This function updates the filtered pokemon list to show on pagination. */

    const updateFiltered = ( content : string ) : IUpdateFilterList => {

        // if the search bar is empty,
        if(content == ''){
        // set the filtered list state to all of the pokemons again
        setFiltered(allPokes);
        // and set the searchBar status to normal
        return {
            color: 'primary',
            label: 'Search pokemón...'
        }
        } 

        // creating filtered list based on parameter text
        const filteredList:IPokemon[] = allPokes.filter( ( currPokemon : IPokemon ) => {
        // add only the pokemon whose name contains the text into textField. 
        if(sanitize(currPokemon.name).includes(sanitize(content))){
            return currPokemon;
        }
        });

        // if there is not a single poke inside the filtered list...
        if(filteredList.length === 0){
        // update filtered pokes with all of them
        setFiltered(allPokes);  
        // and set status to SearchBar to error
        return {
            color: 'error',
            label: 'No pokemón found.'
        }
        }

        // otherwise, update filtered pokes state with the filtered ones
        setFiltered(filteredList);
        // and set status to SearchBar to success
        return {
        color: 'success',
        label: `${filteredList.length} pokemón${filteredList.length > 1 ? 's' : ''} found.`
        }

    }

    // returns a TextField component from MaterialUI
    return (
        <TextField
            color={filterStatus.color}
            InputLabelProps={{style:{color: '#ccc'}}}
            sx={{input: {color:'#fff'}}}
            label={filterStatus.label}
            variant='filled'
            onChange={ e => {
                // change the filtered list to display
                // AND returns a status object
                const status = updateFiltered(e.target.value);
                // updates it
                setFilterStatus(status);
            }}
        />
    )
}

export default SearchBar