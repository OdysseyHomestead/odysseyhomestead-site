import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('Welcome page', () => {
  test('renders the hero with title and tagline', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /odyssey homestead/i, level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Your journey to sustainable living starts here.')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /odyssey homestead/i })).toBeInTheDocument();
  });

  test('shows key feature cards with descriptions', () => {
    render(<App />);

    const features = screen.getAllByRole('heading', { level: 2 });
    const featureSection = screen.getByRole('heading', { name: 'Sustainable Living' }).closest('.features');

    expect(features.map((heading) => heading.textContent)).toEqual(
      expect.arrayContaining(['Sustainable Living', 'Farm Life', 'Artisanal Crafts']),
    );

    const featureCards = featureSection ? within(featureSection).getAllByRole('heading', { level: 2 }) : [];

    expect(featureCards).toHaveLength(3);
    expect(screen.getByText(/harmony of traditional farming methods/i)).toBeInTheDocument();
    expect(screen.getByText(/connect with our ducks, chickens/i)).toBeInTheDocument();
    expect(screen.getByText(/beauty of handcrafted pottery/i)).toBeInTheDocument();
  });

  test('includes an accessible social link to X', () => {
    render(<App />);

    const socialLink = screen.getByRole('link', { name: /follow odyssey homestead on x/i });

    expect(socialLink).toHaveAttribute('href', 'https://x.com/odyssey_hs');
    expect(socialLink).toHaveAttribute('target', '_blank');
    expect(socialLink).toHaveAttribute('rel', 'noopener noreferrer');
    expect(within(socialLink).getByText('Follow us on X')).toBeInTheDocument();
  });
});
