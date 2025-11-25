import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Odyssey Homestead hero content', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /odyssey homestead/i });
  const tagline = screen.getByText(/sustainable living starts here/i);

  expect(heading).toBeInTheDocument();
  expect(tagline).toBeInTheDocument();
});
