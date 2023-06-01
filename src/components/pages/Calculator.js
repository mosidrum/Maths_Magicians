import { useState } from 'react';
import Screen from '../Screen';
import './calculator.css';
import calculate from '../../logic/calculate';
import Api from '../Api';
import Loading from '../../assets/loading.gif';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const solve = (e) => {
    setState(() => calculate(state, e.target.innerText));
  };
  const { total, operation, next } = state;
  const {
    res, loading, error, author,
  } = Api('https://api.api-ninjas.com/v1/quotes?category=computers');
  if (loading) {
    return <img src={Loading} className="loader" alt="Loader" />;
  }
  if (error) {
    return <p>There was an error fetching the quote</p>;
  }
  return (
    <div className="container">
      <div className="quote">
        <h2>{author}</h2>
        <p>{res}</p>
      </div>
      <section className="my-calculator">
        <Screen total={total} operation={operation} next={next} />
        <div className="buttons">
          <button type="button" className="ac" onClick={solve}>
            AC
          </button>
          <button type="button" className="plmi" onClick={solve}>
            +/-
          </button>
          <button type="button" className="percent" onClick={solve}>
            %
          </button>
          <button type="button" className="division orange" onClick={solve}>
            &#247;
          </button>
          <button type="button" className="digit" onClick={solve}>
            7
          </button>
          <button type="button" className="digit" onClick={solve}>
            8
          </button>
          <button type="button" className="digit" onClick={solve}>
            9
          </button>
          <button type="button" className="multiplication orange" onClick={solve}>
            x
          </button>
          <button type="button" className="digit" onClick={solve}>
            4
          </button>
          <button type="button" className="digit" onClick={solve}>
            5
          </button>
          <button type="button" className="digit" onClick={solve}>
            6
          </button>
          <button type="button" className="subtract orange" onClick={solve}>
            -
          </button>
          <button type="button" className="digit" onClick={solve}>
            1
          </button>
          <button type="button" className="digit" onClick={solve}>
            2
          </button>
          <button type="button" className="digit" onClick={solve}>
            3
          </button>
          <button type="button" className="addition orange" onClick={solve}>
            +
          </button>
          <button type="button" className="zero" onClick={solve}>
            0
          </button>
          <button type="button" className="decimal" onClick={solve}>
            .
          </button>
          <button type="button" className="equal orange" onClick={solve}>
            =
          </button>
        </div>
      </section>
    </div>
  );
};

export default Calculator;
