export interface IPokemon {
    name : string,
    id : number,
    order : number,
    height : number,
    weight : number,
    base_experience : number
    

    // sprite path
    sprites : {
        other: {
            dream_world:{
                front_default : string;
            }
        }
    },



    // array of objects
    abilities : {
        // ability with its name
        ability:{
            name : string
        }
    }[],


    

    // array of objects
    stats : {
        // number of the status
        base_stat:number,
        // name of the status
        stat : {
            name:string
        }
    }[]
}
