class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  // eslint-disable-next-line class-methods-use-this
  _verifyArgs(args, expectedCount) {
    if (args.length !== expectedCount) {
      throw new Error(`fungsi hanya menerima ${expectedCount} parameter`);
    }

    args.forEach((arg) => {
      if (typeof arg !== 'number') {
        throw new Error('fungsi hanya menerima parameter numbers');
      }
    });

    return args;
  }

  calculateRectanglePerimeter(...args) {
    const [length, width] = this._verifyArgs(args, 2);

    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    const [length, width] = this._verifyArgs(args, 2);

    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...args) {
    const [sideA, sideB, sideC] = this._verifyArgs(args, 3);

    return this._mathBasic.add(sideA, this._mathBasic.add(sideB, sideC));
  }

  calculateTriangleArea(...args) {
    const [base, height] = this._verifyArgs(args, 2);

    return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
