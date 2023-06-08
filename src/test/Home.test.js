import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/pages/Home';

describe('test suit for home component', () => {
  it('should display quote', () => {
    render(<Home />);
    expect(screen.getByText('Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.')).toBeInTheDocument();
  });

  it('should display author name', () => {
    render(<Home />);
    expect(screen.getByText('Shakuntala Devi, Indian writer and mental calculator')).toBeInTheDocument();
  });
});
