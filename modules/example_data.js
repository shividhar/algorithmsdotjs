exports.integer = function(max) {

  return Math.floor((Math.random() * max) + 1);

}

exports.array = function(size, max) {

  elements = []

  for (var i = 0; i < size; i++) {

    if (max) {

      elements.push(Math.floor((Math.random() * max) + 1));

    }

    else {

      elements.push(Math.floor((Math.random() * 100) + 1));

    }

  }

  return elements;

};
