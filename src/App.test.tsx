import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/不承认俄罗斯的任何假投票！！！/i);
  expect(linkElement).toBeInTheDocument();
});
