import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FooterBerlincito from './FooterBerlincito';

describe('<FooterBerlincito />', () => {
  test('it should mount', () => {
    render(<FooterBerlincito />);
    
    const footerBerlincito = screen.getByTestId('FooterBerlincito');

    expect(footerBerlincito).toBeInTheDocument();
  });
});