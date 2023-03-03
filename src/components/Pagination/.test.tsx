import React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import Pagination from '.';
import { MemoryRouter } from 'react-router-dom';
import Provider from '../../context/Provider';

describe('Pagination', () => {

    it('Renders the component and paginates correctly', () => {

        let _id = 0;
        const getPoke = ( name:string ) => {
            _id++;
            return {
                id: _id,
                name: name,
                sprites: {
                    other: {
                        dream_world: {
                            front_default: 'https://pokeapi.co/api/v2/pokemon/'+_id,
                        },
                    },
                },
            }
        }

        // THIS TEST IS FAILING, BECAUSE
        // FOR SOME REASON, THIS LIST IS BEING UNDEFINED OVER TEST...
        const pokemonsToShow = [
            getPoke('Bulbasaur'),
            getPoke('Pikachu'),
            getPoke('Charmander'),
            getPoke('Squirtle'),
            getPoke('Jigglypuff'),
            getPoke('Snorlax'),
        ];

        const pokemonsPerPage = 3;

        // rendering all the routes so the useNavigation hook works on test.
        const { getByRole, getByText } = render(
            // @ts-ignore
            <Provider value={{
                setSelectedPokemon: jest.fn(),
                setFavPokesIds: jest.fn(),
                favPokesIds: pokemonsToShow
            }}>
                <MemoryRouter>
                    {/* @ts-ignore */}
                    <Pagination pokemonsToShow={pokemonsToShow} pokemonsPerPage={pokemonsPerPage} />
                </MemoryRouter>
            </Provider>
        )
        
        // getting the pagination component

        
        // Verify that the cards display
          // Verify that the cards display
        const list = getByRole('list');

        const cardsList = list.children;
        expect(cardsList).toHaveLength(pokemonsPerPage);

        act(()=>{
            // Click on the next page button
            fireEvent.click(getByText('>'));
        })
        
        // Verify that the second page of pokemons is displayed
        const secondPagePokemons = pokemonsToShow.slice(pokemonsPerPage, pokemonsPerPage * 2);
        expect(cardsList).toHaveLength(pokemonsPerPage);
        
        // verifiying if the cards have their expected names
        expect(cardsList[0]).toHaveTextContent(secondPagePokemons[0].name);
        expect(cardsList[1]).toHaveTextContent(secondPagePokemons[1].name);
        expect(cardsList[2]).toHaveTextContent(secondPagePokemons[2].name);
    });
});
