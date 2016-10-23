const readline = require('readline');
const example = require('./modules/example_data.js')

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

        const bubble = require('./algorithms/sorts/bubble.js');
        output = bubble.sort(input);
        console.log('Output: ' + output);

      }

      else if (algorithm == '2') {

        input = example.array(10, 100);
        console.log('Randomly generated input: ' + input);

        const selection = require('./algorithms/sorts/selection.js');
        output = selection.sort(input);
        console.log('Output: ' + output);

      }

      else if (algorithm == '3') {

        input = example.integer(10);
        console.log('Randomly generated input: ' + input);

        const factorial = require('./algorithms/combinatorics/factorial.js');
        output = factorial.calculate(input);
        console.log('Output: ' + output);

      }

      else if (algorithm == '4') {

        n = example.integer(10);
        r = example.integer(10);
        console.log('Randomly generated input: ' + n + ' and ' + r);

        const combinations = require('./algorithms/combinatorics/combinations.js');
        output = combinations.calculate(input1, input2);
        console.log('Output: ' + output);

      }

      else if (algorithm == '5') {

        n = example.integer(10);
        r = example.integer(10);
        console.log('Randomly generated input: ' + n + ' and ' + r);

        const permutations = require('./algorithms/combinatorics/permutations.js');
        output = permutations.calculate(n, r);
        console.log('Output: ' + output);

      }

      rl.close();

    });

  }

  else if (answer == '2') {

    rl.question("Which Data Structure (refer to key in README)? \n", (structure) => {

      if (structure == '1') {

        const LinkedList = require('./data_structures/linked_list.js');
        console.log(LinkedList.status);

      }

      else if (structure == '2') {

        const BinaryTree = require('./data_structures/binary_tree.js');
        console.log(BinaryTree.status);

      }

      rl.close();

    });

  }

});
