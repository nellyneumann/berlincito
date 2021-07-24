import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Places from './Places';

describe('<Places />', () => {
  test('it should mount', () => {
    render(<Places />);
    
    const places = screen.getByTestId('Places');

    expect(places).toBeInTheDocument();
  });
});