/* OS
* @command: run node os_demo.js to execute this file
* @documentation: https://nodejs.org/dist/latest-v14.x/docs/api/os.html
*/

// import module `os`
const os = require('os');

// Platform
console.log(os.platform());

// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime());