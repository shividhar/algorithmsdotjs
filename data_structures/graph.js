/*
  - Unweighted
  - Undirected
  - No duplicate edges
  - Edges are only between unique nodes
*/
exports.adjacencyList = function(nodePairs) {

  var list = [];

  for (var pair of nodePairs) {
    var node1 = pair[0];
    var node2 = pair[1];

    //console.log('\npair =', pair);

    // Make sure that lists exist for node1 and node2
    for (var node of [node1, node2]) {
      if (list[node] == undefined) {
        list[node] = [];
      }
    }

    // Add edges (if nodes are unique and edge doesn't already exist)
    if (node1 != node2) {
      if (list[node1].indexOf(node2) == -1) {
        list[node1].push(node2);
      }
      if (list[node2].indexOf(node1) == -1) {
        list[node2].push(node1);
      }
    }

    //console.log('list =', list);
  }

  // Make sure a list exists for every node
  for (var node = 0; node < list.length; node++) {
    if (list[node] == undefined) {
      list[node] = [];
    }
  }

  return list;

}
