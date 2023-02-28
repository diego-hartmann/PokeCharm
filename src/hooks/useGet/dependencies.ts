import { AxiosResponse } from 'axios';

export interface IProps {
    endpoint   : string,
    onSuccess?  : () => void ,
    onError?    : () => void ,
    onFinished? : () => void ,
}

export interface IResult {
    data : [],
    isLoading : boolean,
    errorMessage : string
}

export type TPromiseToAxiosResponse = ()=> Promise<AxiosResponse<any,any>>;
