import React from 'react';
import { render, screen } from '@testing-library/react';
import Provider from '.';

describe('Provider', () => {
  test('renders children', () => {
    render(
      <Provider>
        <div data-testid="child">Child Component</div>
      </Provider>
    );
    const childElement = screen.getByTestId('child');
    expect(childElement).toBeInTheDocument();
  });
});
