// const person = require('./person');
// console.log(person.name);

// const Person = require('./person');
// // import Person from './person'; -- not yet implemented in node

// const person1 = new Person('Afsara benazir', 10);
// person1.greeting();

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));
logger.log("hello world");