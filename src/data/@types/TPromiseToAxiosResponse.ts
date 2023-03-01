import { AxiosResponse } from 'axios';
export type TPromiseToAxiosResponse = ()=> Promise<AxiosResponse<any,any>>;