// I created this hook to for axios.get modulation.
// it encapsulates both useState and useEffect,
// so there is no need to call both hook inside the component
// since they are being modulated into this single hook.
// It returns an object containing dinamic states based on the request result.

// importing the hooks that are going to be bootstraped
import { useState, useEffect } from 'react';

// dealing with axios
import axios, { CancelTokenSource } from 'axios';

// importing custom types

// types
import { IRequestResult } from '../../data/@types/IRequestResult';
import { IPokemon } from '../../data/@types/IPokemon';

// importing the localstorage pokemons so it dows not over-use request.
import { cashedPokemons } from '../../utils/cashedPokemons';


/**
 * Hook for making GET requests to POKEAPI. 
 * @param count the number of pokemons to be displayed.
 * @returns an object {isLoading, pokemons, isSuccess, errorMessage} holding the states of the request.
 */
const usePokeList = ( count : number = 150) => {




    //#region ==============-- HOLDING THE STATES --=====================================================
    // Bellow, even though not needed, I will explicitly declare the types of the generic parameters.
    // This way, I make my intention clear.
    // Also, it will prevent any error by changing the default value of the useState parameter by mistake.
    
    // holds the state for the request data result. Starts as an empty list.
    const [ pokemons, setPokemons ] = useState<IPokemon[]>([]);
    
    // specifies if the request is in loading process or not. Starts as true.
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    // specifies if the request is succeeded or not. Starts as true.
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    
    // holds the state for the error message from the request. Starts as an empty string.
    const [errorMessage, setErrorMessage] = useState<string>('');
    //#endregion ________________________________________________________________________________________
    





    //#region ==============-- DEALING WITH THE FETCH LOGIC --===========================================
    useEffect( ()=> {

        
        // if there is pokemon inside localstorage, let's save reqs. Or payed servers, it saves money.
        // for some reason, it does not seem to work... Maybe due to filesize, it does not save into localstorage
        const cashed = cashedPokemons.get();
        if(cashed.length > 0){
            setPokemons(cashed);
            setIsSuccess(true);
            setIsLoading(false);
            setErrorMessage('');
            console.log("Cashed pokemóns");
            return;
        }

        console.log("Requesting pokemóns...");

        // creating axios source so we can get its token and cancel() it into unMount (return()=>...).
        const axiosSource : CancelTokenSource = axios.CancelToken.source();
        
        // axios promise config
        const config = { cancelToken: axiosSource.token };

        // bootstraping the axios promisse into another function for organization and maintaince. 
        // const makeReq : TPromiseToAxiosResponse = async () => await axios.get( url, config );

        let promises = [];
        for (let i = 1; i <= count; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            promises.push(axios.get(url, config));
        }

        // executing the request once the hook is called by the caller Component.
        Promise.all(promises)
        // defining the data state based on the response data.
        .then( ( requests : any )  => { 
            // accessing the list of pokemons
            const pokeList = requests.map( ( req : any ) => req.data );
            
            // saving it into the global state context.
            setPokemons(pokeList);
            
            // saving it into storage, so there is no need to re-request in other render.
            // for some reason, it does not seem to work...
            cashedPokemons.set(pokeList)
            
            setIsSuccess(true);
    
            console.log("Success on request.");
        })
        // defining the error message based on the enpoint.
        .catch( error => {
            setErrorMessage( `An error ocurred on GET pokemons:\n${error}` );
            setIsSuccess( false );
        })
        // cancelling loading once the request is over, regardless its result.
        .finally( ()=> setIsLoading( false ) );

        // canceling the source once the component unmounts.
        return () => axiosSource.cancel();

    }, [] )
    //#endregion ________________________________________________________________________________________






    //#region ==============-- RETURNING THE OBJECT WITH THE STATES --===================================
    // returning all the states at one object to be updated into the caller Component after finishing the useEffect callback.
    const resultData : IRequestResult = { pokemons, isLoading, isSuccess, errorMessage }; 
    return resultData;
    //#endregion ________________________________________________________________________________________



}

export default usePokeList;