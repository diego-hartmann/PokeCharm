
interface IDreamWorld {
    front_default:string;
}

interface IOther {
    dream_world : IDreamWorld
}

interface sprites {
    other : IOther
}

export interface IPokemon {
    name : string,
    id : number,
    order : number,
    height : number,
    weight : number,
    base_experience : number
    sprites : sprites,
    // modify it latter, setting as ANY for testing
    abilities : any[],
    stats : any[] 
}
