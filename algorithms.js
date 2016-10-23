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

        input = example.elements;
        console.log('Randomly generated input: ' + input);

        const bubble = require('./algorithms/sorts/bubble.js');
        output = bubble.sort(input);
        console.log('Output: ' + output);

      }

      else if (algorithm == '2') {

        input = example.elements;
        console.log('Randomly generated input: ' + input);

        const selection = require('./algorithms/sorts/selection.js');
        output = selection.sort(input);
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
