sort = function (elements) {

  for (var i = 0; i < elements.length - 1; i++) {

    // assume minimum is current index

    var min = i;

    for (var j = i + 1; j < elements.length; j++) {

      // if element is less than suceeding element

      if (elements[j] < elements[min]) {

        // set element as new minumum

        min = j;

      }

    }

    // insert element back into array

    if (min != i) {

      var temp = elements[min];

      elements[min] = elements[i];
      elements[i] = temp;

    }

  }

  return elements;

}

exports.sort = sort;
