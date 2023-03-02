// importando as bibliotecas necessárias
import React from 'react';
import { render, screen } from '@testing-library/react';
import { IPokemon } from '../../data/@types/IPokemon';
// importando o componente a ser testado
import Card from '.';

import Provider from '../../context/Provider'

// mockando as funções necessárias
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Teste do Componente Card', () => {
  it('Deve renderizar um card com as informações corretas', () => {
    //criando um pokemon para teste
    const pokemon = {
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

    //renderizando o componente em teste
    render(
      <Provider>
        {/* @ts-ignore */}
        <Card pokemon={pokemon} hover={true} />
      </Provider>
    );

    //verificando se o nome do pokemon foi renderizado corretamente
    expect(screen.getByText('Bulbasaur')).toBeInTheDocument();

    //verificando se a imagem do pokemon foi renderizada corretamente
    expect(screen.getByAltText('Bulbasaur')).toBeInTheDocument();

    //verificando se o botão de favorito foi renderizado corretamente
    expect(screen.getByTestId('pokeball')).toBeInTheDocument();
  });
  
})