// uses the same logic as in AddMod.js but with diffrent functionallity

const readline = require('readline');

function askQuestion(query){
    const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
    });
    return new Promise(resolve=> {
        rl.question(query,answer => {
            rl.close();
            resolve(answer);
        });
    });
}

async function deletetask(TasksArray){

    const input = await askQuestion("Enter the title of the task to delete: ");
    let index = TasksArray.findIndex(task=>task.title.toLowerCase()===input.toLowerCase());

    if (index !== -1) {
    TasksArray.splice(index, 1);
    console.log("Task deleted successfully.");
    } else {
    console.log("Task not found.");
    }
};

module.exports = deletetask;

