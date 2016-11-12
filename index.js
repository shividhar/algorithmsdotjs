// Imports

const readline = require('readline');
const example = require('./modules/example_data.js')

//// Algorithms

// Sorts

const Bubble = require('./algorithms/sorts/bubble.js');
const Selection = require('./algorithms/sorts/selection.js');

// Combinatorics

const Factorial = require('./algorithms/combinatorics/factorial.js');
const Combinations = require('./algorithms/combinatorics/combinations.js');
const Permutations = require('./algorithms/combinatorics/permutations.js');
const Fibonacci = require('./algorithms/combinatorics/fibonacci.js');


//// Data Structures

const LinkedList = require('./data_structures/linked_list.js');
const BinaryTree = require('./data_structures/binary_tree.js');
const Graph = require('./data_structures/graph.js');

// Kitchen Sink

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

rl.question("Algorithm (1) or Data Structure (2)? \n", (answer) => {

  if (answer == '1') {

    rl.question("Which Algorithm (refer to key in README)? \n", (algorithm) => {

      if (algorithm == '1') {

        input = example.array(10, 100);
        console.log('Randomly generated input: ' + input);

        output = Bubble.sort(input);
        console.log('Output: ' + output);

      }

      else if (algorithm == '2') {

        input = example.array(10, 100);
        console.log('Randomly generated input: ' + input);

        output = Selection.sort(input);
        console.log('Output: ' + output);

      }

      else if (algorithm == '3') {

        input = example.integer(10);
        console.log('Randomly generated input: ' + input);

        output = Factorial.calculate(input);
        console.log('Output: ' + output);

      }

      else if (algorithm == '4') {

        n = example.integer(10);
        r = example.integer(10);
        console.log('Randomly generated input: ' + n + ' and ' + r);

        output = Combinations.calculate(n, r);
        console.log('Output: ' + output);

      }

      else if (algorithm == '5') {

        n = example.integer(10);
        r = example.integer(10);
        console.log('Randomly generated input: ' + n + ' and ' + r);

        output = Permutations.calculate(n, r);
        console.log('Output: ' + output);

      }

      else if (algorithm == '6') {

        n = example.integer(10);
        console.log('Randomly generated input: ' + n);

        output = Fibonacci.calculate(n);
        console.log('Output: ' + output);

      }

      rl.close();

    });

  }

  else if (answer == '2') {

    rl.question("Which Data Structure (refer to key in README)? \n", (structure) => {

      if (structure == '1') {

        console.log(LinkedList.status);

      }

      else if (structure == '2') {

        console.log(BinaryTree.status);

      }

      // Graph
      else if (structure == '3') {

        // Parameters
        const maxNode = 10;
        const numberOfPairs = 10;

        var nodePairs = [];
        console.log('\nRandomly generated node pairs:');
        for (var i = 0; i < numberOfPairs; i++) {
          nodePairs.push(example.array(2, maxNode));
          console.log(nodePairs[nodePairs.length - 1][0], nodePairs[nodePairs.length - 1][1]);
        }

        var adjacencyList = Graph.adjacencyList(nodePairs);

        console.log('\nAdjacency list:');
        //console.log(adjacencyList);
        for (var node in adjacencyList) {
          console.log(node, ':', adjacencyList[node]);
        }

      }

      rl.close();

    });

  }

});

// Exports

exports.Bubble = Bubble;
exports.Selection = Selection;

exports.Factorial = Factorial;
exports.Combinations = Combinations;
exports.Permutations = Permutations;
exports.Fibonacci = Fibonacci;

exports.LinkedList = LinkedList;
exports.BinaryTree = BinaryTree;
exports.Graph = Graph;
