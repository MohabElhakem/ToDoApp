// this function  takes only the place it will put the task on
const { resolve } = require('path');
const readline = require('readline');
 
function askQuestion(query){

    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
// the function promises an answer
return new Promise (resolve=>{
    rl.question(query,                      // you ask the question
        answer=>{
            rl.close();                // when you answer it thequestion ends and the promise resolve it 
            resolve (answer);
    });
});
}

async function addTask (TasksArray){        // async for telling the function it will stop to wait at somepoint

    const input = await askQuestion("Enter task (title, status): "); // you want an input thats why you asked question
    const [title, status = "pending"] = input.split(',').map(str => str.trim());
    TasksArray.push({ title, status });
    console.log("Task added successfully.");
}

module.exports = addTask;


