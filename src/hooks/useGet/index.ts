// importing the hooks that are going to be bootstraped
import { useState, useEffect, useCallback } from 'react';

// dealing with axios
import axios, { CancelTokenSource } from 'axios';

// importing our custom types
import {  IProps, IResult, TPromiseToAxiosResponse } from './dependencies';


/**
 * Hook for making GET requests to POKEAPI. 
 * @param { string } endpoint - The endpoint for the POKEAPI request. 
 * @returns an object holding the states of the request.
 */
const useGet = ({
    endpoint,
    onSuccess  = () => console.log("Succeded!"),
    onError    = () => console.log("Error!"),
    onFinished = () => console.log("Finished!"),
} : IProps ) => {




    //#region ==============-- HOLDING THE STATES --=====================================================
    // Bellow, even though not needed, I will explicitly declare the types of the generic parameters.
    // This way, I make my intention clear.
    // Also, it will prevent any error by changing the default value of the useState parameter by mistake.
    
    // holds the state for the request data result. Starts as an empty list.
    const [ data, setData ] = useState<[]>([]);
    
    // specifies if the request is in loading process or not. Starts as true.
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    // holds the state for the error message from the request. Starts as an empty string.
    const [errorMessage, setErrorMessage] = useState<string>('');
    //#endregion ________________________________________________________________________________________
    





    //#region ==============-- HOLDING THE PROP METHOS INTO CALLBACKS --=================================
    // so they are not re-declared on each render.
    const OnSuccess =  useCallback( () => onSuccess(),  [onSuccess]  );
    const OnError =    useCallback( () => onError(),    [onError]    );
    const OnFinished = useCallback( () => onFinished(), [onFinished] );
    //#endregion ________________________________________________________________________________________






    //#region ==============-- DEALING WITH THE FETCH LOGIC --===========================================
    useEffect( ()=> {

        // creating axios source so we can get its token and cancel() it into unMount (return()=>...).
        const axiosSource : CancelTokenSource = axios.CancelToken.source();
        
        // bootstraping the axios promisse into another function for organization and maintaince. 
        const makeReq : TPromiseToAxiosResponse = async () => await axios.get( `https://pokeapi.co/api/v2/${endpoint}/`, { cancelToken: axiosSource.token } );

        // executing the request once the hook is called by the caller Component.
        makeReq()
        .then( response  => { 
            // defining the data state based on the response data.
            response.data.content ? setData(response.data.content) : ( response.data && setData(response.data) );
            OnSuccess();
        })
        .catch( error => {
            // defining the error message based on the enpoint.
            setErrorMessage(`An error ocurred on GET /${endpoint}:\n${error}`);
            OnError();
        }) // cancelling loading once the request is over, regardless its result.
        .finally( ()=> {
            setIsLoading(false);
            OnFinished();
        });

        // canceling the source once the component unmounts.
        return () => axiosSource.cancel();

    }, [endpoint, OnSuccess, OnError, OnFinished] )    
    //#endregion ________________________________________________________________________________________






    //#region ==============-- RETURNING THE OBJECT WITH THE STATES --===================================
    // returning all the states at one object to be updated into the caller Component after finishing the useEffect callback.
    const resultData : IResult = { data, isLoading, errorMessage }; 
    return resultData;
    //#endregion ________________________________________________________________________________________



}

export default useGet;