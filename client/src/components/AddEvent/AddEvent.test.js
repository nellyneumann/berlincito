import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddEvent from './AddEvent';

describe('<AddEvent />', () => {
  test('it should mount', () => {
    render(<AddEvent />);
    
    const addEvent = screen.getByTestId('AddEvent');

    expect(addEvent).toBeInTheDocument();
  });
});