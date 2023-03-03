import { IPokemon } from "../../data/@types/IPokemon";

export const getSkeleton:()=>IPokemon = () =>  ({
    name: "...",
    id: 1000,
    order: 1000,
    height: 1000,
    weight: 1000,
    base_experience: 1000,
    sprites: {
        other: {
            dream_world: {
                front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/130.svg",
            },
        },
    },
    abilities: [
        {
            ability: {
                name: "...",
            },
        },
        {
            ability: {
                name: "...",
            },
        },
    ],
    stats: [
        {
            base_stat: 1000,
            stat: {
                name: "...",
            },
        },
        {
            base_stat: 1000,
            stat: {
                name: "...",
            },
        },
        {
            base_stat: 1000,
            stat: {
                name: "...",
            },
        },
        {
            base_stat: 1000,
            stat: {
                name: "...",
            },
        },
        {
            base_stat: 1000,
            stat: {
                name: "...",
            },
        },
    ],
});
