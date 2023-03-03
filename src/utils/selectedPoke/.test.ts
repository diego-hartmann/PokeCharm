import { selectedPoke } from ".";
import { IPokemon } from "../../data/@types/IPokemon";

describe('selectedPoke localStorage functions', () => {
    
    const pokeMock = {
        id: 1,
        name: 'Bulbasaur',
        sprites: {
          other: {
            dream_world: {
              front_default: 'https://pokeapi.co/api/v2/pokemon/1',
            },
          },
        },
      };

    // cleaning it before starting...
    beforeEach(() => {
      localStorage.clear();
    });

    test('Should save and get the same IPokemon from localStorage.', () => {
        selectedPoke.set(pokeMock as IPokemon); // forcing it to be the Ipokemon type to test propouses.
        const result = selectedPoke.get();
        expect(result).toEqual(pokeMock);
    });
  
  });