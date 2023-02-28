// importing the hooks that are going to be bootstraped
import { useState, useEffect } from 'react';

// dealing with axios
import axios, { CancelTokenSource } from 'axios';

// importing our custom types
import { IResult, TPromiseToAxiosResponse } from './dependencies';


/**
 * Hook for making GET requests to POKEAPI. 
 * @param { string } endpoint - The endpoint for the POKEAPI request. 
 * @returns an object holding the states of the request.
 */
const useGet = ( endpoint : string ) => {




    //#region ==============-- HOLDING THE STATES --=====================================================
    // Bellow, even though not needed, I will explicitly declare the types of the generic parameters.
    // This way, I make my intention clear.
    // Also, it will prevent any error by changing the default value of the useState parameter by mistake.
    
    // holds the state for the request data result. Starts as an empty list.
    const [ data, setData ] = useState<[]>([]);
    
    // specifies if the request is in loading process or not. Starts as true.
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    // specifies if the request is succeeded or not. Starts as true.
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    
    // holds the state for the error message from the request. Starts as an empty string.
    const [errorMessage, setErrorMessage] = useState<string>('');
    //#endregion ________________________________________________________________________________________
    





    //#region ==============-- DEALING WITH THE FETCH LOGIC --===========================================
    useEffect( ()=> {

        // creating axios source so we can get its token and cancel() it into unMount (return()=>...).
        const axiosSource : CancelTokenSource = axios.CancelToken.source();
        
        // bootstraping the axios promisse into another function for organization and maintaince. 
        const makeReq : TPromiseToAxiosResponse = async () => await axios.get( `https://pokeapi.co/api/v2/${endpoint}/`, { cancelToken: axiosSource.token } );

        // executing the request once the hook is called by the caller Component.
        makeReq()
        // defining the data state based on the response data.
        .then( response  => { 
            response.data.content ? setData(response.data.content) : ( response.data && setData(response.data) );
            setIsSuccess(true);
        })
        // defining the error message based on the enpoint.
        .catch( error => {
            setErrorMessage( `An error ocurred on GET /${endpoint}:\n${error}` );
            setIsSuccess(false);
        })
         // cancelling loading once the request is over, regardless its result.
        .finally( ()=> setIsLoading(false) );

        // canceling the source once the component unmounts.
        return () => axiosSource.cancel();

    }, [endpoint] )
    //#endregion ________________________________________________________________________________________






    //#region ==============-- RETURNING THE OBJECT WITH THE STATES --===================================
    // returning all the states at one object to be updated into the caller Component after finishing the useEffect callback.
    const resultData : IResult = { data, isLoading, isSuccess, errorMessage }; 
    return resultData;
    //#endregion ________________________________________________________________________________________



}

export default useGet;