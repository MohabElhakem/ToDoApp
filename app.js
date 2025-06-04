console.log("i am working");
const readline = require ('readline'); // this is the first step of creating an interface importing the module
const addTask= require('./AddMod');
const deleteTask = require('./DeleteMod');
// i added the important files that i need to run my code 
// the same as the first two files you need to make my questions in its own function 

function askQuestion(query){
     const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise (resolve=>{
    rl.question(query,answer=>{
        rl.close();
        resolve(answer);
    });
  });
}
const Tasks =[];

async function main(){


    const choice= await askQuestion("What do you want to do?\n1. Add\n2. Delete\naddx. terminate\n> ");
    if (choice === "1") {
        await addTask(Tasks);
    } else if (choice === "2"){
        await deleteTask(Tasks);
    }else if (choice === "x") { terminate = true; }
    console.log("Current tasks:", Tasks);

}
//
var terminate = false;

(async ()=> {

  do {
    await main();
  } while(terminate===false)

    console.log ("This program is terminated")
}) ();

/*
Each module (AddMod.js, DeleteMod.js, etc.) runs its own readline interface to ask user input.
Node.js readline can only handle one question at a time per interface, so it's safer to keep it separate per module.
By having askQuestion locally:
Each module is independent and reusable.
You avoid interference between multiple readline interfaces.
It keeps code modular, clean, and avoids bugs.

readline.question() is asynchronous.
It starts the question and then immediately continues running the rest of your code.
The callback (the function with answer => { ... }) runs later, after the user types something and presses Enter.

A Promise waits for the user to answer.
await pauses your function until the Promise resolves (i.e. the user finishes typing).
This lets your code run in the right order, even though it's still asynchronous under the hood.
You used Promises to make readline.question() wait like a regular (synchronous) line,
so the rest of your code runs only after the user responds.
*/ 
