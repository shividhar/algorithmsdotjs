# algorithmsdotjs

[![NPM](https://nodei.co/npm/algorithmsdotjs.png?mini=true)](https://nodei.co/npm/algorithmsdotjs/)  
[![npm version](https://badge.fury.io/js/algorithmsdotjs.svg)](https://badge.fury.io/js/algorithmsdotjs)

(soon to be) The most comprehensive collection of common data structures and algorithms (with explanations!) implemented in node.js

## Directory

The key for each module is written as `key`.

- [ ] signifies that a module is incomplete; feel free to implement it!

### Algorithms

#### Sorts

- [x] Bubble Sort `1`
- [x] Selection Sort `2`
- [x] Merge Sort `7`

#### Combinatorics

- [x] Factorial `3`
- [x] Combinations `4`
- [x] Permutations `5`
- [x] Fibonacci `6`

### Data Structures

- [ ] Linked List `1`
- [ ] Binary Tree `2`
- [x] Graph `3`

## Installation

1. Clone the project repository
2. `cd` into the project directory
3. Run `node index.js` to run project
4. Use console as input

### Use as dependency

1. Install `algorithmsdotjs` as `npm install --save algorithmsdotjs`
2. Include the project with `algorithmsdotjs = require('algorithmsdotjs')`
3. Use exports of index.js (example) `sorted_array = algorithmsdotjs.Bubble.sort(array)`

## Using the `example_data` module

The `example_data` module quickly creates arrays and single integers of randomized data (with specifications).

1. Include `example_data` using `example = require('./path/to/modules/example_data.js')`
2. Retrieve data using `let data = example.array(size_of_array, maximum_value_of_elements)`

To return a single integer: `example.integer(maximum_value)`

## Contributing

If you have any additions/improvements/suggestions feel free to open a pull request or fork this repository!

### Current Contributors

[Arun Kirubarajan](http://www.kirubarajan.com/)  
[Neeraj Aggarwal](http://neerajaggarwal.com/)  
[Jacob Kelly](https://github.com/jacobjinkelly)  
[Bruno Almeida](https://github.com/brunofalmeida)
[Shivansh Dhar](https://github.com/shividhar)

## License

MIT Licensed
