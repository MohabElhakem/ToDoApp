console.log("i am working");
const readline = require ('readline'); // this is the first step of creating an interface importing the module
const addTask= require('./AddMod');
const deleteTask = require('./DeleteMod');
// i added the important files that i need to run my code 
const rl = readline.createInterface({ // creating the interface
    input: process.stdin,               // tells node to listen to standerd input
    output: process.stdout              // tells node to print the massage to terminal outputs
});

var Tasks = [];// this is my main array start anything after this exipt requires

rl.question("What do you want to do \n1.add\t2.delete\n" ,
     (chosingTheFeature) => { if (chosingTheFeature === "1" ) {
        rl.question("What Task Would you like to add \n\n",(userInputs) => {

             const [ title , stat ] = userInputs.split(',').map(str=>str.trim());
             addTask(Tasks, title, stat);
             console.log( Tasks );
             rl.close() ;// close the add question
            } );     
         } 

         else if (chosingTheFeature === "2") {

        rl.question("What Do you Want to Delete",(userInputs)=>{
            
            deleteTask(Tasks ,userInputs)
            console.log(Tasks);
            rl.close();//closing the delete question
             } );
         }

         else {
            console.log("Invalid option. Please enter 1 or 2.");
            rl.close();// this is the closing of the main question
         }
        }

);