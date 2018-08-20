var fs = require('fs');

// var data = fs.readFileSync('input.txt');

// console.log(data.toString());
// console.log("ended")


//how does it know this is an error object?? in callback functions are all 1st params errors?
//if theres only one object in param is it an error
fs.readFile('newinput.txt', (error, data) => {
    if (error) throw error;
    console.log(data.toString());
})

fs.writeFile('input3.txt', 'Using this to chain some callbacks.', (err) => {
    if (err) throw err;
    fs.readFile('input3.txt', (error, data) => {
        if (error) throw error;
        console.log(data.toString());
    })
})