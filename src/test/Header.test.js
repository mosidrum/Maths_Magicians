import { render } from "@testing-library/react";
import Header from '../components/Header';
import { BrowserRouter } from "react-router-dom";

describe('Header', () => {
  it('should render correctly', () => {
    const head = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    
    );
    expect(head).toMatchSnapshot();
  });
});