sort = function (elements) {

  var flag = true;

  var j = elements.length + 1;

  // iterate through array while elements are unordered

  while (flag) {

    flag = false;

    j--;

    // for each pass through the list, we check one less element than the previous pass
    // since the last element checked in the previous pass is guaranteed to be in its final position

    for (var i = 0; i < j; i++) {

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
