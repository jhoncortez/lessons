/*
* streams works for sending long data in buffers to an endpoint so
* this will reduce the loading time in the endpoing (browser, video etc.)
* thi s method is used by stream services like netlix, spotify, etc.
* Run node streams to execute.
*/

const fs = require( 'fs' );

//read stream fs.createReadStream(from, opt) | it reads data from file blog1
const readStream = fs.createReadStream('./blog1.txt', {'encoding': 'utf8'});

//write stream fs.createWriteStream(to) | it writes buffers data to fille blog4
const writeStream = fs.createWriteStream('./blog4.txt');

// event listener "data" - LONG WAY
/*readStream.on('data', chunk => {
  // console.log('---- NEW CHUNK ----');
  // console.log(chunk);
  writeStream.write('\nNEW CHUNK:\n');
  writeStream.write(chunk);
});*/

/* PIPE short way to do the stream*/
readStream.pipe(writeStream);
// send data from readable to writeable file just like we did it  inf
// first example