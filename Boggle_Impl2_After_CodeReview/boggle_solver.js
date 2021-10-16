
// creats a new Boggle board and calls getSolutions 
exports.findAllSolutions = function(grid, dictionary) {
    return []
}

const grid = [
    ["T","W","Y","R"],
    ["E","N","P","H"],
    ["G","Z","Qu","R"],
    ["O","N","T","A"]
];
const dictionary = ["art", "ego", "gent", "get", "net", "new", "newt", "prat", "pry", "qua", "quart", "quartz", "rat", "tar", "tarp", "ten", "went", "wet", "arty", "egg", "not", "quar"];
console.log(exports.findAllSolutions(grid, dictionary));