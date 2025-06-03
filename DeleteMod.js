// just type the function that is used to delete 
// 1 needs the name of the array it will search in 

function deletetask(TasksArray, To_be_deleted_task_title){
    
    let index = TasksArray.findIndex(task => task.title.toLowerCase() === To_be_deleted_task_title.toLowerCase());

   if (index !== -1)
     { TasksArray.splice(index,1);
        console.log(" Task deleted "); }
    else {console.log(" Does not Exists" );}
};

module.exports = deletetask;

/*let T = [ {title:"1st",stats:"pending"} , {title:"2st",stats:"done"}, {title:"3st",stats:"pending"}];

deletetask(T , "1st");*/ 
