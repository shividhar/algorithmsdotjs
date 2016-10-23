const factorial = require('./factorial.js');

exports.calculate = function(n, r) {

  if (r > n) {

    return 'error: r > n';

  }

  else {

    permutations = factorial.calculate(n) / factorial.calculate(n - r);
    return permutations;

  }

}
