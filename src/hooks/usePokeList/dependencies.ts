import { AxiosResponse } from 'axios';
import { IPokemon } from '../../data/@types/IPokemon';

export interface IResult {
    pokemons : IPokemon[],
    isLoading : boolean,
    isSuccess : boolean,
    errorMessage : string
}

export type TPromiseToAxiosResponse = ()=> Promise<AxiosResponse<any,any>>;
