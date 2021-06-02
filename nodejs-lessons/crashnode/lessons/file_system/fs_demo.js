/* FILE SYSTEM
* @command: run node fs_demo.js to execute this file
* @documentation: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html
*/

// import `fs` module
const fs = require('fs');
const path = require('path');

// create folder
// docs: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_mkdir_path_options_callback

fs.mkdir(path.join(__dirname,'/test'), {}, (err) => {
    if (err) throw err;
    console.log('Folder created...')
}) ;

// create file and writing content in to
// docs: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback

fs.writeFile(path.join(__dirname,'test', 'hello.txt'), 'hello world', (err) => {
    if (err) throw err;
    console.log('File written to...')
}) ;

// Append file content to existing file
// docs: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_appendfile_path_data_options_callback

//fs.appendFile(path.join(__dirname,'test', 'hello.txt'), 'this is node.js', (err) => {
//    if (err) throw err;
//    console.log('File content appended to...')
//}) ; 

// append file in callback function from writeFile ( or other method)
fs.writeFile(path.join(__dirname,'test', 'hello.txt'), 'hello world', (err) => {
    if (err) throw err;
    console.log('File written to...');
    callAppendFile(path.join(__dirname,'test', 'hello.txt'), ' this is nodejs adding new content to hello file');
}) ;
const callAppendFile = (file, content) => {
    fs.appendFile(file, content, (err) => {
        if (err) throw err;
        console.log('File content appended to...', file)
    }) ;
}

// Read file content
// docs: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_readfile_path_options_callback

//fs.readFile(path.join(__dirname,'test', 'hello.txt'), 'utf8', (err, data) => {
//    if (err) throw err;
//    console.log('File content:' , data);
//}) ;

// read file in callback function from writeFile ( or other method)
fs.writeFile(path.join(__dirname,'test', 'hello.txt'), 'hello world', (err) => {
    if (err) throw err;
    console.log('File written to...');
    const filepath = path.join(__dirname,'test', 'hello.txt');
    callReadFile(filepath);
}) ;
const callReadFile = (file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) throw err;
        console.log('File content:' , data);
    }) ;
}