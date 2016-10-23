exports.integer = function() {

  return Math.floor((Math.random() * 100) + 1);

}

exports.array = function(size) {

  elements = []

  for (var i = 0; i < size; i++) {

    elements.push(Math.floor((Math.random() * 100) + 1));

  }

  return elements;

};
