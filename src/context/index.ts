// using native context api to create app context.
import { createContext } from 'react';

// importing the defined type of the data.
import { TContext } from '../data/@types/TContext';

// definig and exporting the app context.
const Context = createContext( {} as TContext );
export default Context;