/**
 * Given a Boggle board and a dictionary, returns a list of available words in
 * the dictionary present inside of the Boggle board.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @returns {string[]} solutions - Possible solutions to the Boggle board.
 */


exports.findAllSolutions = function(grid, dictionary) {
    let solutions = [];


  return solutions;
}


var grid = [['t', 'w', 'y', 'r'],
              ['e', 'n', 'p', 'h'],
              ['g', 'z', 'qu', 'r'],
              ['o', 'n', 't', 'a']];
var dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
                    'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
                    'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar'];


console.log(exports.findAllSolutions(grid, dictionary));

