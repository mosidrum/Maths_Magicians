import './calculator.css';

const Calculator = () => (
  <section className="my-calculator">
    <div className="result">
      <span className="screen">
        0
      </span>
    </div>
    <div className="buttons">
      <button type="button" className="ac">
        AC
      </button>
      <button type="button" className="plmi">
        +/-
      </button>
      <button type="button" className="percent">
        %
      </button>
      <button type="button" className="division orange">
        /
      </button>
      <button type="button" className="digit">
        7
      </button>
      <button type="button" className="digit">
        8
      </button>
      <button type="button" className="digit">
        9
      </button>
      <button type="button" className="multiplication orange">
        x
      </button>
      <button type="button" className="digit">
        4
      </button>
      <button type="button" className="digit">
        5
      </button>
      <button type="button" className="digit">
        6
      </button>
      <button type="button" className="subtract orange">
        -
      </button>
      <button type="button" className="digit">
        1
      </button>
      <button type="button" className="digit">
        2
      </button>
      <button type="button" className="digit">
        3
      </button>
      <button type="button" className="addition orange">
        +
      </button>
      <button type="button" className="zero">
        0
      </button>
      <button type="button" className="decimal">
        .
      </button>
      <button type="button" className="equal orange">
        =
      </button>
    </div>
  </section>
);

export default Calculator;
