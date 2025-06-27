import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio content', () => {
  render(<App />);
  
  // Test for the presence of the navigation section
  const aboutNavItem = screen.getByRole('button', { name: /about/i });
  expect(aboutNavItem).toBeInTheDocument();
  
  // Test for the JLC initials in the header
  const initialsElement = screen.getByText('JLC');
  expect(initialsElement).toBeInTheDocument();
});
