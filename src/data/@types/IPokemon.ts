export interface IPokemon {
    name : string,
    image : string,
    id : number,
    order : number,
    height : number,
    weight : number,
    base_experience : number
    
    // modify it latter, setting as ANY for testing
    abilities : any[],
    stats : any[] 
}
