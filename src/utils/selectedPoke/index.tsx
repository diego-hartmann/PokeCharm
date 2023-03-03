import { IPokemon } from "../../data/@types/IPokemon";

export const selectedPoke = {
    set(value:IPokemon){
        localStorage.setItem("selectedPoke", JSON.stringify(value));
    },
    get(){
        // @ts-ignore
        return JSON.parse(localStorage.getItem("selectedPoke"));
    }
}