 class TaskManager {
    
constructor(currentId) {
     this.currentId = 0;
     this.tasks = [];   
    } 
    
  addTasks(name, description, assignTo, dueDate, status) {
    this.currentId++;
    status = 'TODO';
    let id = this.currentId;
    this.tasks.push({name, description, assignTo, dueDate, status, id})
  }
    
}




//this add a task to the task manager
tasks1.addTasks(
     'Take out the trash',
     'Take out the trash to the front of the house',
     'Nick',
     '2020-09-20',
     'TODO'
     )

console.log(tasks1.tasks);
exports.TaskManager = TaskManager;