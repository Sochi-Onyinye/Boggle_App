/**
 * Given a Boggle board and a dictionary, returns a list of available words in
 * the dictionary present inside of the Boggle board.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @returns {string[]} solutions - Possible solutions to the Boggle board.
 */

/** Name: Onyinyechukwu Ogbuanya 
 *  Student ID: @02925271
 * Collaborated with Ibukunoluwa Esan
 * Code Reviewer: Chidindu Alim 
 * Code Reviewer ID: @02879014
 */
const findAllSolutions = function(grid, dictionary) {
	let solution = [];
	const moves = [[-1, 0], [0, 1], [1, 0], [0, -1], [-1,-1], [-1,1], [1,-1], [1,1]];
	const upperwords = dictionary.map(word => word);

	const buildTrie = () => 
	{
		const root = {};
		for (const word of upperwords) 
		{
			let node = root;
			for (let i = 0; i < word.length; i++) 
			{
				let char = word[i];
				if (char === "q")
				{
					char = "qu";
					i++;
				}
				if (char === "s")
				{
					char = "st";
					i++;
				}
				if (node[char] == null) node[char] = {};
				node = node[char];
			}
			node.upperwords = word;
		}
		return root;
	};
   
	const search = (node, x, y) => 
	{
		if (node.upperwords != null) 
		{
			if(node.upperwords.length > 2)
			{
				solution.push(node.upperwords);
			}
			node.upperwords = null;
		}

		if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) return;
		if (node[grid[x][y]] == null) return;

		const char = grid[x][y];
		grid[x][y] = "*";
		for (const [dx, dy] of moves) {
			const i = x + dx;
			const j = y + dy;
			search(node[char], i, j);
		}
		grid[x][y] = char;
	};

	const root = buildTrie();
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			search(root, i, j);
		}
	}
	return solution;
};


// var grid = [['t', 'w', 'y', 'r'],
//               ['e', 'n', 'p', 'h'],
//               ['g', 'z', 'qu', 'r'],
//               ['o', 'n', 't', 'a']];
// var dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
//                     'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
//                     'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar'];


// //console.log(exports.findAllSolutions(grid, dictionary));

export default findAllSolutions