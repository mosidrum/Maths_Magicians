import operate from "../logic/operate";

describe('check if operation can be made', () => {

  it('lets multiply 10 by 10', () => {
    expect(operate(10, 10, 'x')).toBe('100');
  })

})