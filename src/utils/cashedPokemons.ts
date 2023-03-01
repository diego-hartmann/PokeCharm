import { IPokemon } from "../data/@types/IPokemon";

// id does not work, probably due to file size.
export const cashedPokemons = {
    set(value:IPokemon[]){
        const newVal = JSON.stringify(value)
        // console.log('setting cached with ', newVal); // it appears to work here,
        localStorage.setItem("cashedPokemons", newVal); // but is not setted here...
    },
    get(){
        return JSON.parse(localStorage.getItem("cashedPokemons")!!) ?? ([] as IPokemon[]);
    }
}