/*
  Returns the shortest distance if a path is found, or -1 if a path is not found.
*/
exports.calculate = function(adjacencyList, startNode, endNode) {

  //console.log("\nBFS");
  //console.log(adjacencyList);
  //console.log(startNode, endNode);

  const INFINITY = 1000000000;

  var distances = Array(adjacencyList.length).fill(INFINITY);
  var queue = [];

  distances[startNode] = 0;
  queue.push(startNode);

  while (queue.length > 0) {
    //console.log('\nQueue:', queue);
    // console.log('Distances');
    // for (var i = 0; i < distances.length; i++) {
    //   console.log(i.toString(), ":", distances[i].toString());
    // }

    var currentNode = queue.shift();

    //console.log('Current node:', currentNode);

    for (var nextNode = 0; nextNode < adjacencyList.length; nextNode++) {
      if ((adjacencyList[currentNode].indexOf(nextNode) != -1) &&
          (distances[nextNode] == INFINITY)) {
            //console.log('Next node:', nextNode);

            distances[nextNode] = distances[currentNode] + 1;
            queue.push(nextNode);
      }
    }
  }

  // console.log('\nDistances:');
  // console.log('Length:', distances.length);
  // for (var i = 0; i < distances.length; i++) {
  //   console.log(i.toString(), ':', distances[i]);
  // }

  if (distances[endNode] == INFINITY) {
    return -1;
  } else {
    return distances[endNode];
  }

}
