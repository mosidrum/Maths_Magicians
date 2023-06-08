import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  it('should render correctly', () => {
    const head = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,

    );
    expect(head).toMatchSnapshot();
  });
});
