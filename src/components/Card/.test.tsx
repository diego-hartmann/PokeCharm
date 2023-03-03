// Importing necessary libraries
import React from 'react';
import { render, screen } from '@testing-library/react';
import { IPokemon } from '../../data/@types/IPokemon';

// Importing the component to be tested
import Card from '.';
import Provider from '../../context/Provider';

// Mocking necessary functions
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

// Describe block for testing Card component
describe('Test of Card Component', () => {
  it('Should render a card with correct information', () => {
    // Creating a pokemon for testing
    // @ts-ignore -> ignoring missing properties from type
    const pokemon: IPokemon = {
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

    // Rendering the component being tested
    render(
      <Provider>
        <Card pokemon={pokemon} hover={true} />
      </Provider>
    );

    // Checking if the pokemon name is rendered correctly
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();

    // Checking if the pokemon image is rendered correctly
    expect(screen.getByAltText('Bulbasaur')).toBeInTheDocument();

  });
});
