const readline = require('readline');
const example = require('./modules/example_data.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Algorithm (1) or Data Structure (2)? \n", (answer) => {

  if (answer = '1') {

    rl.question("Which algorithm (refer to key in README)? \n", (sort) => {

      if (sort == '1') {

        input = example.elements;
        console.log('Randomly generated input: ' + input);

        bubble = require('./algorithms/sorts/bubble.js');
        output = bubble.sort(input);
        console.log('Output: ' + output);

      }

      rl.close();

    });

  }

  else if (answer = '2') {

  }

});
