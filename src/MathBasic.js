const MathBasic = {
  _validateArgs(args) {
    if (args.length !== 2) {
      throw new Error('fungsi add hanya menerima dua parameter');
    }

    args.forEach((arg) => {
      if (typeof arg !== 'number') {
        throw new Error('fungsi add hanya menerima parameter number');
      }
    });

    return args;
  },
  add(...args) {
    const [a, b] = this._validateArgs(args);

    return a + b;
  },
  subtract(...args) {
    const [a, b] = this._validateArgs(args);

    return a - b;
  },
  multiply(...args) {
    const [a, b] = this._validateArgs(args);

    return a * b;
  },
  divide(...args) {
    const [a, b] = this._validateArgs(args);

    return a / b;
  },
};

module.exports = MathBasic;
