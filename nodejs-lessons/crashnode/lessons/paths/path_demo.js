/* PATHS
* @command: run node path_demo.js to execute this file
* @documentation: https://nodejs.org/dist/latest-v14.x/docs/api/path.html
*/

// import module `path`
const path = require('path');

// return the full file name route
console.log('filename route is: ', __filename);

// return the base file name
console.log('file basename is: ', path.basename(__filename));

// return the directory name
console.log('file dirname is: ',path.dirname(__filename));

// return the file extension
console.log('file extension is: ',path.extname(__filename));

// create path object 
console.log('Path object is: ',path.parse(__filename));

// get properties of path object
const pathObject = path.parse(__filename);
console.log('Path object name is: ',pathObject.name);
console.log('Path object extenson is: ',pathObject.ext);

// concatenate paths to generate full paths.
console.log('Concatenated (generated) path: ',path.join(__dirname, 'test', 'hello.html'));