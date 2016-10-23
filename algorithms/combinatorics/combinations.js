const factorial = require('./factorial.js');

exports.calculate = function(n, r) {

  if (r > n) {

    return 'error: r > n';

  }

  else {

    combinations = factorial.calculate(n) / (factorial.calculate(n - r) * factorial.calculate(r));
    return combinations;

  }

}
