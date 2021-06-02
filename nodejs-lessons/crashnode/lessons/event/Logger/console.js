
/* EVENTS EXERCISE
* @command: run node console.js to execute this file
*/
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');


