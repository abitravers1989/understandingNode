//import event module
var events = require('events');

//Create an eventEmitter object 
var eventEmitter = new events.EventEmitter();

//Create an event handler 
var eventHandler = () => {
    console.log('connection succesful');
    //create and fire the data recieved event
    eventEmitter.emit('data_recieved');
}

//bind the connection event with the handler
eventEmitter.on('connection', eventHandler)

//bind the data recieved event with an anpnymous function 
eventEmitter.on('data_recieved', () => {
    console.log('data_recieved has been fired');
})

//fire the connected event
eventEmitter.emit('connection');