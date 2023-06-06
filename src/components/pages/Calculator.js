import { useState } from 'react';
import Screen from '../Screen';
import './calculator.css';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });
  const solve = (e) => {
    setState(() => calculate(state, e.target.innerText));
  };
  const { total, operation, next } = state;
  return (
    <div className="container">
      <h1>Lets do some maths!</h1>
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
