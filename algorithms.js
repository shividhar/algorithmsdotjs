const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (name) => {

  console.log('Welcome to algorithms.js, ' + name + '!');

  rl.close();

});
