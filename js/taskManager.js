//step 1 create a function using template literals to return the HTML for each individual task
const createTaskHtml = (name, description, assignedTo, dueDate, status, currentId) => {

  const html =
    `<li class = "parentTask" id = "${currentId}">  
                    <div class="card" style="width: 20rem;">
                      <div class="card-body">
                        <h3 class="card-title">Task Name: ${name}</h3>
                        <p class="assignment">Assigned to: ${assignedTo}</p>
                        <p class="due">Due: ${dueDate}</p>
                        <p class="card-text">Task Description: ${description}</p>
                        <span class="status"> ${status}</span> <br>
                           

                            <button type="button" class="btn btn-outline-success btn-danger delete-button" >Delete</button>
                        <button type="button" class="btn btn-outline-success done-button" >Mark as Done</button>
                            
                            

                
                      </div>
                    </div>
                </li>`

  return html


};



class TaskManager {

  constructor(currentId) {
    this.currentId = 0;
    this.tasks = [];
  }

  addTasks(name, description, assignTo, dueDate, status) {
    this.currentId++;
    status = 'TODO';
    let id = this.currentId;
    this.tasks.push({ name, description, assignTo, dueDate, status, id })
  }
  render() {
    let tasksHtmlList = []
    for (let taskNumber = 0; taskNumber < this.tasks.length; taskNumber++) {
      //store tasklist item in a variable
      let currentTask = this.tasks[taskNumber]
      let date = new Date(currentTask.dueDate)
      //console.log(date)
      //change date format to mm/dd/yyyy
      let formattedDate = (date.getMonth() + 1) + "/" + (date.getDate() + 1) + "/" + date.getFullYear();
      //task 6 step 2 #3.iv
      let taskHTML = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignTo, formattedDate, currentTask.status, this.currentId)
      tasksHtmlList.push(taskHTML)
    }
    let tasksHtml = tasksHtmlList.join('\n')
    //console.log(tasksHtml);



    document.querySelector("#taskList").innerHTML = tasksHtml;
    // console.log(tasksHtml)
  }
  save() {
    let tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", tasksJson);
    let currentId = this.currentId.toString();
    localStorage.setItem("currentId", currentId);

  }
  // && (localStorage.getItem("currentId") != "" )
  load() {
    if (localStorage.getItem("tasks") != "") {
     let tasksJson = localStorage.getItem("tasks");
     this.tasks = JSON.parse(tasksJson);
      let currentId = localStorage.getItem("currentId");
      this.currentId = new Number(currentId);

    } 
  }
  deleteTask(taskId){
let newTasks = [];
for(let i =0;i<this.tasks;i++){
let task = this.tasks[i];
if(task.id!=taskId){
newTasks.push(task);

}
}
this.tasks = newTasks;

  }
  getTaskById(taskId) {
    let foundTask;
    for (let i = 0; i <= this.tasks.length; i++) {
      let task = this.tasks[i];
      if (task.id == taskId) {
        foundTask = task;
        return foundTask;
      }
    }
  };
}
let taskCount = 0;




//exports.TaskManager = TaskManager;
