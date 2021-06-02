/* EVENTS
* @command: run node event_demo.js to execute this file
* @documentation: https://nodejs.org/dist/latest-v14.x/docs/api/events.html#events_class_eventemitter
*/

// import module `events`


const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');