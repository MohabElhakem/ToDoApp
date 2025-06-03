console.log("i am working");
const readline = require ('readline'); // this is the first step of creating an interface importing the module
const addTask= require('./AddMod');
// i added the important files that i need to run my code 
const rl = readline.createInterface({ // creating the interface
    input: process.stdin,               // tells node to listen to standerd input
    output: process.stdout              // tells node to print the massage to terminal outputs
});

var Tasks = [];
rl.question("What Task Would you like to add \n\n",(userInputs) => {

    const [ title , stat ] = userInputs.split(',').map(str=>str.trim());
    addTask(Tasks, title, stat);
    console.log( Tasks );
    rl.close() ;// close the question or the code will keep looking for an answer
});


