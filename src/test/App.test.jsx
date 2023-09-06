import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App test', () => {
  it('should render the title', () => {
    render(<App />);
    const title = screen.getByText(/hello world/i);
    expect(title).toBeInTheDocument();
  });
});
