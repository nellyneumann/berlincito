import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Events from './Events';

describe('<Events />', () => {
  test('it should mount', () => {
    render(<Events />);
    
    const events = screen.getByTestId('Events');

    expect(events).toBeInTheDocument();
  });
});