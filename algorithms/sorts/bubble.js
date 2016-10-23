sort = function (elements) {

  var flag = true;

  // iterate through array while elements are unordered

  while (flag) {

    flag = false;

    for (var i = 0; i < elements.length - 1; i++) {

      // if element is smaller than succeeding element, swap and flag array as unordered

      if (elements[i] > elements[i + 1]) {

        var temp = elements[i];

        elements[i] = elements[i + 1];
        elements[i + 1] = temp;

        flag = true;

      }

    }

  }

  return elements;

}

exports.sort = sort;
