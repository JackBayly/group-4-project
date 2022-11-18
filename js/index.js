// this instatiate a task manager
const tasks1 = new TaskManager();
//Form validation function
//Currently gets values from inputs in form and console logs them


function validFormFieldInput() {
//inputs and their values
    const taskName = document.querySelector('#taskname');
    const name = taskName.value;

    const taskDescription = document.querySelector('#description');
    const  description = taskDescription.value;
   
    const taskAssignedTo = document.querySelector('#select');
    const assignedTo = taskAssignedTo.value; 
   
    // const taskDateAssigned = document.querySelector('#assign-to');
    // const dateAssigned = taskDateAssigned.value;
 
    const taskDueDate = document.querySelector('#dueDate');
    const dueDate = taskDueDate.value;
   
    // console.log(`Name: ${name}, Description: ${description}, Assigned To: ${assignedTo}, Date Assigned: ${dateAssigned}, Due Date: ${dueDate}`);
//form validation
    if(name==""||description==""||assignedTo==""||dueDate==""){
        
        
//Checks if error message is present (to prevent duplicate messages)
        if(document.querySelector('#errorMsg')!==null){
            document.querySelector('#errorMsg').remove();
        } 
//If error message is not present then create one and display it
        let div = document.createElement('div');
    
        const alertHTML = '<div class="alert alert-danger" id="errorMsg" role="alert">' +
        'Please fill in all fields' +
      '</div>';
      const form = document.querySelector('#todo-form');
      div.innerHTML = alertHTML;
      form.insertBefore(div, null);
     
    } else {
        // const errorMsg = document.querySelector('#errorMsg');
        // errorMsg.remove();
        tasks1.addTasks(name, description, assignedTo, dueDate)
        tasks1.render();
        //console.log(tasks1.tasks);
       // let result = tasks1.getTaskById(1);
        //console.log(result);
    }

};




//On click of form button the validFormSubmitBtn function gets called
const formSubmitBtn = document.querySelector('#formSubmitBtn');
formSubmitBtn.addEventListener("click", validFormFieldInput);


let taskList = document.querySelector("#taskList");
//checks to see if mark as done was clicked
taskList.addEventListener('click', (event) => {
    let doneClicked = event.target.classList.contains('done-button')
   // console.log(doneClicked);
   
     if (doneClicked) {
        taskList = event.target.closest("li");
        let taskId   = Number(taskList.id);

        let task =  tasks1.getTaskById(taskId);
       task.status = "Done";
       tasks1.render();
       
        console.log('clicked')
     } else {
    //    console.log('not clicked')
    }

    // console.log(taskList)
} ) 