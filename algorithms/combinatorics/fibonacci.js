exports.calculate = function (n) {

  var numbers = [1];

  for (var i = 0; i < n; i++) {

    if (i == 0) {

      numbers.push(1);

    }

    else if (i > 0) {

      var latest = numbers[i];
      var next_latest = numbers[i - 1];
      var next = latest + next_latest;
      numbers.push(next);

    }

  }

  return numbers;

}
