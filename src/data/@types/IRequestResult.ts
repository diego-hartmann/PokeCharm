import { IPokemon } from '../../data/@types/IPokemon';

export interface IRequestResult {
    pokemons : IPokemon[],
    isLoading : boolean,
    isSuccess : boolean,
    errorMessage : string
}

