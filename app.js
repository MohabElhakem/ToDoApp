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


    const choice= await askQuestion("What do you want to do?\n1. Add\n2. Delete\n> ");
    if (choice === "1") {
        await addTask(Tasks);
    } else if (choice === "2"){
        await deleteTask(Tasks);
    }else {
    console.log("Invalid option. Please enter 1 or 2.");
    }
    console.log("Current tasks:", Tasks);

}

main();