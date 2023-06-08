import { render } from "@testing-library/react";
import Calculator from '../components/pages/Calculator';

describe('Testing the calculator component', () => {
  it('should rendee correctly', () => {
    const show = render(<Calculator />);
    expect(show).toMatchSnapshot();
  });
});