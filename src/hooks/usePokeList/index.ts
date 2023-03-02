// I created this hook to for axios.get modulation.
// it encapsulates both useState and useEffect,
// so there is no need to call both hook inside the component
// since they are being modulated into this single hook.
// It returns an object containing dinamic states based on the request result.

// importing the hooks that are going to be bootstraped
import { useState, useEffect } from 'react';

// types
import { IRequestResult } from '../../data/@types/IRequestResult';
import { IPokemon } from '../../data/@types/IPokemon';

// local storage cached pokemons (not working)
import { cashedPokemons } from '../../utils/cashedPokemons';

/**
 * A custom hook for fetching a list of Pokemons from the PokeAPI
 * @param count The number of Pokemons to fetch
 * @returns An object containing the state of the request
 */
const usePokeList = (count: number) => {
  // Define state variables for Pokemons, loading, success, and error message
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    // Check if there are cached Pokemons in local storage and use them if they exist
    const cashed = cashedPokemons.get();
    if (cashed.length > 0) {
      setPokemons(cashed);
      setIsSuccess(true);
      setIsLoading(false);
      setErrorMessage('');
      console.log('Cached Pokemons');
      return;
    }

    console.log('Requesting Pokemons...');

    // Create an array of Promises that will fetch the Pokemons from the PokeAPI
    const requests = [];
    for (let i = 1; i <= count; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      requests.push(fetch(url));
    }

    // Use Promise.all to wait for all the Promises to resolve
    Promise.all(requests)
      .then(async (responses) => {
        // Parse the response data and store the Pokemons in state
        const pokeList = [];
        for (const response of responses) {
          if (response.ok) {
            const pokemon = await response.json();
            pokeList.push(pokemon);
          } else {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        }
        setPokemons(pokeList);
        cashedPokemons.set(pokeList);
        setIsSuccess(true);
        console.log('Success on request.');
      })
      .catch((error) => {
        // If an error occurs, store the error message in state
        setErrorMessage(`An error occurred on GET Pokemons:\n${error}`);
        setIsSuccess(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  // Return an object containing the state variables
  const resultData: IRequestResult = { pokemons, isLoading, isSuccess, errorMessage };
  return resultData;
};

export default usePokeList;
