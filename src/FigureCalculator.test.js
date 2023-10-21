const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');

describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator({});

    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe('A calculateRectanglePerimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
    });

    it('should throw error when given with non-numbers parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateRectanglePerimeter('hey', '2')).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(false, {})).toThrowError();
      expect(() => figureCalculator.calculateRectanglePerimeter(null, [])).toThrowError();
    });

    it('should return correct value based on rectangle perimeter formula', () => {
      // Arrange
      const length = 20;
      const width = 10;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateRectanglePerimeter(length, width);

      // Assert
      expect(result).toEqual(60); // 2 x (length + width)
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, MathBasic.add(length, width));
    });
  });

  describe('A calculateRectangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
    });

    it('should throw error when given non-numbers parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateRectangleArea('aaa', false)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(undefined, {})).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(null, [])).toThrowError();
    });

    it('should return correct value based on rectangle area formula', () => {
      // Arrange
      const length = 15;
      const width = 5;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateRectangleArea(length, width);

      // Assert
      expect(result).toEqual(75);
      expect(spyMultiply).toHaveBeenCalledWith(length, width);
    });
  });

  describe('A calculateTrianglePerimeter function', () => {
    it('should throw error when not given 3 parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 6)).toThrowError();
    });

    it('should throw error when given non-numbers parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateTrianglePerimeter('ppp', false, true)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(null, {}, [])).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter([], undefined, '3')).toThrowError();
    });

    it('should return correct value based on triangle perimeter formula', () => {
      // Arrange
      const sideA = 53;
      const sideB = 17;
      const sideC = 21;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, sideC);

      // Assert
      expect(result).toEqual(91);
      expect(spyAdd).toHaveBeenCalledWith(sideA, MathBasic.add(sideB, sideC));
    });
  });

  describe('A calculateTriangleArea function', () => {
    it('should throw error when not given 2 parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(2, 6)).toThrowError();
    });

    it('should throw error when given non-numbers parameters', () => {
      const figureCalculator = new FigureCalculator({});
      expect(() => figureCalculator.calculateTriangleArea('kkk', '3')).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(false, {})).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea([], undefined)).toThrowError();
    });

    it('should return correct value based on triangle area formula', () => {
      // Arrange
      const base = 12;
      const height = 25;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const figureCalculator = new FigureCalculator(MathBasic);

      // Action
      const result = figureCalculator.calculateTriangleArea(base, height);

      // Assert
      expect(result).toEqual(150);
      expect(spyMultiply).toHaveBeenCalledWith(base, height);
      expect(spyDivide).toHaveBeenCalledWith(MathBasic.multiply(base, height), 2);
    });
  });
});
