export interface IPokemonAbility{
    // ability with its name
    ability:{
        name : string
    }
}


export interface IPokemonStatus{
    // number of the status
    base_stat:number,
    // name of the status
    stat : {
        name:string
    }
}


export interface IPokemonSprite {
    other: {
        dream_world:{
            front_default : string;
        }
    }
}

export interface IPokemon {
    
    name : string,
    id : number,
    order : number,
    height : number,
    weight : number,
    base_experience : number
    
    // sprite path
    sprites : IPokemonSprite,

    // array of objects
    abilities : IPokemonAbility[],

    // array of objects
    stats : IPokemonStatus[]


}
