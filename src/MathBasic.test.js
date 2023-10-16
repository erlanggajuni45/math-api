const MathBasic = require('./MathBasic');

describe('A math basic', () => {
  it('should contains add, subtract, mutiply, and divide function', () => {
    expect(MathBasic).toHaveProperty('add');
    expect(MathBasic).toHaveProperty('subtract');
    expect(MathBasic).toHaveProperty('multiply');
    expect(MathBasic).toHaveProperty('divide');
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe('A add function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-numbers parameters', () => {
      expect(() => MathBasic.add('1', '2')).toThrowError();
      expect(() => MathBasic.add(true, {})).toThrowError();
      expect(() => MathBasic.add(null, false)).toThrowError();
    });

    it('should return a + b when given two number parameters', () => {
      expect(MathBasic.add(1, 4)).toEqual(5);
      expect(MathBasic.add(7, 12)).toEqual(19);
      expect(MathBasic.add(25, 54)).toEqual(79);
    });
  });

  describe('A subtract function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.subtract()).toThrowError();
      expect(() => MathBasic.subtract(1)).toThrowError();
      expect(() => MathBasic.subtract(1, 2, 3)).toThrowError();
      expect(() => MathBasic.subtract(1, 3, 4, 5)).toThrowError();
    });

    it('should throw error when given non-numbers parameters', () => {
      expect(() => MathBasic.subtract('1', 'f')).toThrowError();
      expect(() => MathBasic.subtract(null, false)).toThrowError();
      expect(() => MathBasic.subtract({}, [])).toThrowError();
      expect(() => MathBasic.subtract(undefined, true)).toThrowError();
    });

    it('should return a - b when given two number parameters', () => {
      expect(MathBasic.subtract(5, 3)).toEqual(2);
      expect(MathBasic.subtract(10, 12)).toEqual(-2);
      expect(MathBasic.subtract(50, 25)).toEqual(25);
      expect(MathBasic.subtract(123, 78)).toEqual(45);
    });
  });

  describe('A multiply function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.multiply()).toThrowError();
      expect(() => MathBasic.multiply(2)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3)).toThrowError();
      expect(() => MathBasic.multiply(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-numbers parameters', () => {
      expect(() => MathBasic.multiply('1', '2')).toThrowError();
      expect(() => MathBasic.multiply(null, {})).toThrowError();
      expect(() => MathBasic.multiply(undefined, false)).toThrowError();
      expect(() => MathBasic.multiply(true, [])).toThrowError();
    });

    it('should return a * b when given two number parameters', () => {
      expect(MathBasic.multiply(4, 5)).toEqual(20);
      expect(MathBasic.multiply(25, 3)).toEqual(75);
      expect(MathBasic.multiply(100, 5)).toEqual(500);
      expect(MathBasic.multiply(13, 6)).toEqual(78);
    });
  });

  describe('A divide function', () => {
    it('should throw error when not given 2 parameters', () => {
      expect(() => MathBasic.divide(2)).toThrowError();
      expect(() => MathBasic.divide()).toThrowError();
      expect(() => MathBasic.divide(1, 2, 3)).toThrowError();
      expect(() => MathBasic.divide(1, 2, 3, 4)).toThrowError();
    });

    it('should throw error when given non-numbers parameters', () => {
      expect(() => MathBasic.divide(true, 'hehe')).toThrowError();
      expect(() => MathBasic.divide(null, {})).toThrowError();
      expect(() => MathBasic.divide('1', '2')).toThrowError();
      expect(() => MathBasic.divide([], undefined)).toThrowError();
    });

    it('should return a / b when given two number parameters', () => {
      expect(MathBasic.divide(65, 13)).toEqual(5);
      expect(MathBasic.divide(5, 5)).toEqual(1);
      expect(MathBasic.divide(1, 2)).toEqual(0.5);
      expect(MathBasic.divide(700, 350)).toEqual(2);
    });
  });
});
