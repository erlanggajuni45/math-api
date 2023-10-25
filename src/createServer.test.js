const createServer = require('./createServer');
const MathBasic = require('./MathBasic');
const FigureCalculator = require('./FigureCalculator');

describe('A HTTP Server', () => {
  describe('when GET /add', () => {
    it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, 'add');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/add/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toBeCalledWith(a, b);
    });
  });

  describe('when GET /subtract', () => {
    it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
      // Arrange
      const a = 20;
      const b = 10;
      const spySubtract = jest.spyOn(MathBasic, 'subtract');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/subtract/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(10);
      expect(spySubtract).toBeCalledWith(a, b);
    });
  });

  describe('when GET /multiply', () => {
    it('should respond with a status code of 200 and the payload value is multiplication result of a and b correctly', async () => {
      // Arrange
      const a = 5;
      const b = 2;
      const spyMultiply = jest.spyOn(MathBasic, 'multiply');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/multiply/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(10);
      expect(spyMultiply).toBeCalledWith(a, b);
    });
  });

  describe('when GET /divide', () => {
    it('should respond with a status code of 200 and the payload value is division result of a and b correctly', async () => {
      // Arrange
      const a = 18;
      const b = 6;
      const spyDivide = jest.spyOn(MathBasic, 'divide');
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/divide/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(3);
      expect(spyDivide).toBeCalledWith(a, b);
    });
  });

  describe('when GET /rectangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is result of the perimeter of rectangle correctly', async () => {
      // Arrange
      const length = 10;
      const width = 15;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyRectanglePerimeter = jest.spyOn(figureCalculator, 'calculateRectanglePerimeter');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/perimeter/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(50);
      expect(spyRectanglePerimeter).toBeCalledWith(length, width);
    });
  });

  describe('when GET /rectangle/area', () => {
    it('should respond with a status code of 200 and the payload value is result of calculating the area of rectangle correctly', async () => {
      // Arrange
      const length = 25;
      const width = 10;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyRectangleArea = jest.spyOn(figureCalculator, 'calculateRectangleArea');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/rectangle/area/${length}/${width}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(250);
      expect(spyRectangleArea).toBeCalledWith(length, width);
    });
  });

  describe('when GET /triangle/perimeter', () => {
    it('should respond with a status code of 200 and the payload value is result of calculating the perimeter of triangle correctly', async () => {
      // Arrange
      const sideA = 17;
      const sideB = 13;
      const base = 20;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyTrianglePerimeter = jest.spyOn(figureCalculator, 'calculateTrianglePerimeter');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(50);
      expect(spyTrianglePerimeter).toBeCalledWith(sideA, sideB, base);
    });
  });

  describe('when GET /triangle/area', () => {
    it('should respond with a status code of 200 and the payload value is result of calculating the area of triangle correctly', async () => {
      // Arrange
      const base = 10;
      const height = 5;
      const figureCalculator = new FigureCalculator(MathBasic);
      const spyTriangleArea = jest.spyOn(figureCalculator, 'calculateTriangleArea');
      const server = createServer({ figureCalculator });

      // Action
      const response = await server.inject({
        method: 'GET',
        url: `/triangle/area/${base}/${height}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(25);
      expect(spyTriangleArea).toBeCalledWith(base, height);
    });
  });
});
