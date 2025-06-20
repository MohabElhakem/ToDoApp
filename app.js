console.log("i am working");
const readline = require ('readline'); // this is the first step of creating an interface importing the module
const addTask= require('./AddMod');
const deleteTask = require('./DeleteMod');
const fs = require ('fs');
// i added the important files that i need to run my code 
// the same as the first two files you need to make my questions in its own function 
//
//
//
//
function askQuestion(query){
     const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise (resolve=>{
    rl.question(query,answer=>{
        rl.close();
        resolve(answer.trim());
    });
  });
}
//
//
//
//the start of working with the json file
let Tasks =[];  // try and catch method is for running a risky code without craching the program
try{
  const data = fs.readFileSync('./data.json','utf8'); // Read file content as a string
  Tasks= JSON.parse(data); //Convert the JSON string into a real JS array and store it in `tasks`
}catch (err){
  console.error('Error loading tasks:', err);
}
//
//
//
//
// 
//  the main function that will be runeed as a loop
var terminate = false; // this to end the program when it become true
async function main(ter){

    const choice= await askQuestion("\nWhat do you want to do?\nPress\n1 To Add\n2 To Delete\nx to terminate\ns To see The list\n> ");
    if (choice === "1") {
        await addTask(Tasks);
    } else if (choice === "2"){
        await deleteTask(Tasks);
    } else if (choice.toLowerCase() === "x") { return true;}
      else if (choice.toLowerCase() === "s"){
        console.log("\nCurrent tasks:", Tasks);
    } else{console.log("\nInvalid choice type 1,2,s or x to chosse")}
    return false;

}
//
//
//
// because you passied the terminate to the function the function wont affect its value untill you tell it to 

(async ()=> {

  do {
    terminate = await main(terminate);
  } while(terminate===false)

    fs.writeFile('data.json',JSON.stringify(Tasks,null,2),(err)=>{
      if(err){
         console.error('Error writing file:', err);
      }else{
        console.log("The Data Has Been Saved");
      }
    })
    console.log ("\nThis program is terminated");
}) ();
// this is called Immediately Invoked Function Expression

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
