import { AxiosResponse } from 'axios';

export interface IResult {
    data : [],
    isLoading : boolean,
    isSuccess : boolean,
    errorMessage : string
}

export type TPromiseToAxiosResponse = ()=> Promise<AxiosResponse<any,any>>;
