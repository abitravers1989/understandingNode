//import event module
var events = require('events');
var fs = require('fs');

//Create an eventEmitter object 
var eventEmitter = new events.EventEmitter();

//Create an event handler 
// var eventHandler = () => {
//     console.log('connection succesful');
//     //create and fire the data recieved event
//     eventEmitter.emit('data_recieved');
// }

// //bind the connection event with the handler
// eventEmitter.on('connection', eventHandler)

// //bind the data recieved event with an anpnymous function 
// eventEmitter.on('data_recieved', () => {
//     console.log('data_recieved has been fired');
// })

// //fire the connected event
// eventEmitter.emit('connection');






//Create an event handler 
var eventHandler2 = () => {
    console.log('connection succesful');
    //create and fire the data recieved event
    eventEmitter.emit('data_recieved2');
}

//bind the connection event with the handler
eventEmitter.on('connection2', eventHandler2)


eventEmitter.emit('connection2');

eventEmitter.on('data_recieved2', () => {
    fs.readFile('newinput.txt', (error, data) => {
        if (error) throw error;
        console.log(data.toString() + 'not read?');
    });
})

fs.readFile('newinput.txt', (error, data) => {
    if (error) throw error;
    console.log(data.toString());
})


//emit needs to be called before on 