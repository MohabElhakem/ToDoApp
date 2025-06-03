// lets start with the most basic add functin 

function addTask ( TaskArray,task , stat = 'Task In Progress'){
    const taskObj = {title : task , status : stat };
    TaskArray.push(taskObj);
}
// this function have three parameters first one is for telling the functio in which array i will be storing the taskObj
//then i need to export that function so i will be able to use it in the app module 

module.exports = addTask;
/* because i added the function itself i can type addTask when i try to use it for now
    if i eported is as a method 
        module.exports={addTask};
    then i will need to call it as a method using 
        "the name i set".addTask */ 
