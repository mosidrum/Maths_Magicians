import calculate from "../logic/calculate";

describe('Solve mathematics', () => {
  const equal = '=';

  it('Multiplication test', () => {
    const multi = {
      total: '10',
      next: '10',
      operation: 'x',
    };
    const multiply = calculate(multi, equal);
    expect(multiply.total).toBe('100');
  });

  it('Addition test', () => {
    const display = {
      total: '10',
      next: '10',
      operation: '+',
    };
    const multiDisp = calculate(display, equal);
    expect(multiDisp.total).toBe('20');
  });
});


