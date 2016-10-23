exports.calculate = function (number) {

  if (number == 0) {

    return 1;

  }

  else {

    for (var i = number - 1; i > 0; i = i - 1) {

      number = number * i;

    }

  }

  return number;

}
