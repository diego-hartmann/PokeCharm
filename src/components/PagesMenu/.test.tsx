import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PagesMenu from '.';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import Context from '../../context';

const get = (text:string) => screen.getByText(text);


// create a mock function for useNavigate hook that the component uses internally
const mockNavigate = jest.fn();

// mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('PagesMenu', () => {
  test('Renders all buttons', () => {
    
    // rendering the component 
    render(
      // @ts-ignore
      <Context.Provider value={{ favPokesIds: [] }}>
        <MemoryRouter>
          <PagesMenu pageIndex={0} />
        </MemoryRouter>
      </Context.Provider>
    );

    // checking buttons existence
    expect(get('Home')).toBeInTheDocument();
    expect(get('Pokedex')).toBeInTheDocument();

  });

  test('Navigates to Home', () => {
    
    // rendering the component 
    render(
      // @ts-ignore
      <Context.Provider value={{ pokemons: [] }}>
        <MemoryRouter>
          <PagesMenu pageIndex={1} />
        </MemoryRouter>
      </Context.Provider>
    );

    // clicking on button
    act(() => {
      fireEvent.click(get('Home'));
    });

    expect(mockNavigate).toHaveBeenCalledWith('/');

  });


  test('Does not navigates to Home if is at Home already', () => {
    // rendering the component 
    render(
      // @ts-ignore
      <Context.Provider value={{ pokemons: [] }}>
        <MemoryRouter>
          <PagesMenu pageIndex={0} />
        </MemoryRouter>
      </Context.Provider>
    );

    // clicking on button
    act(() => {
      fireEvent.click(get('Home'));
    });

    expect(mockNavigate).not.toHaveBeenCalled();

  });

  test('Navigates to Pokedex page when there are fav pokemons', () => {
    
    // rendering the component 
    render(
      // @ts-ignore
      <Context.Provider value={{ favPokesIds: [1, 2, 3] }}>
        <MemoryRouter>
          <PagesMenu pageIndex={0} />
        </MemoryRouter>
      </Context.Provider>
    );

    // clicking on button
    act(() => {
      fireEvent.click(get("Pokedex"));
    });

    expect(mockNavigate).toHaveBeenCalledWith('/pokedex');

  });

  test('Does not navigate to Pokedex page when there are no fav pokemons', async () => {

    // rendering the component 
    render(
      // @ts-ignore
      <Context.Provider value={{ favPokesIds: [] }}>
        <MemoryRouter>
          <PagesMenu pageIndex={0} />
        </MemoryRouter>
      </Context.Provider>
    );

    // clicking on button
    act(() => {
      fireEvent.click(get("Pokedex"));
    });

    expect(mockNavigate).not.toHaveBeenCalled();

  });

  test('Does not navigate to Pokedex if is at Pokedex already', () => {
    // rendering the component 
      // rendering the component 
      render(
        // @ts-ignore
        <Context.Provider value={{ favPokesIds: [1, 2, 3] }}>
          <MemoryRouter>
            <PagesMenu pageIndex={1} />
          </MemoryRouter>
        </Context.Provider>
      );
  
      // clicking on button
      act(() => {
        fireEvent.click(get("Pokedex"));
      });
  
      expect(mockNavigate).not.toHaveBeenCalled();

  });

});
