import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
  render(<App />);
  const Element = screen.getByText(/hello world/i);
  expect(Element).toBeInTheDocument();
});
