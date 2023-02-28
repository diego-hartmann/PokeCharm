import { AxiosResponse } from 'axios';

export interface IResult {
    pokemons : [],
    isLoading : boolean,
    isSuccess : boolean,
    errorMessage : string
}

export type TPromiseToAxiosResponse = ()=> Promise<AxiosResponse<any,any>>;
