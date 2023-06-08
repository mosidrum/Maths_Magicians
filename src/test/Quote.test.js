import { render } from '@testing-library/react';
import Quote from '../components/pages/Quote';

describe('Quote generated', () => {
  it('should render render quote', () => {
    const result = render(<Quote />);
    expect(result).toMatchSnapshot();
  });
});
