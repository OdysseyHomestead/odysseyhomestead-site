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

test('includes an accessible social link to X', () => {
  render(<App />);
  const socialLink = screen.getByRole('link', { name: /follow odyssey homestead on x/i });

  expect(socialLink).toHaveAttribute('href', 'https://x.com/odyssey_hs');
  expect(socialLink).toHaveAttribute('target', '_blank');
  expect(socialLink).toHaveAttribute('rel', 'noopener noreferrer');
});
