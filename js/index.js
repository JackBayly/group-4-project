import { TaskManager } from "./taskManager.js";
// this instatiate a task manager
const tasks1 = new TaskManager();
tasks1.load();
tasks1.render();

//Form validation function
function validFormFieldInput() {
    //inputs and their values
    const taskName = document.querySelector('#taskname');
    const name = taskName.value;

    const taskDescription = document.querySelector('#description');
    const description = taskDescription.value;

    const taskAssignedTo = document.querySelector('#select');
    const assignedTo = taskAssignedTo.value;

    const taskDueDate = document.querySelector('#dueDate');
    const dueDate = taskDueDate.value;
    
    //Checks if error message is present (to prevent duplicate messages)
    if (document.querySelector('#errorMsg') != null) {
        document.querySelector('#errorMsg').remove();
    }

    //form validation
    if (name == "" || description == "" || assignedTo == "" || dueDate == "") {
     
        //If error message is not present then create one and display it
        let div = document.createElement('div');

        const alertHTML = '<div class="alert alert-danger" id="errorMsg" role="alert">' +
            'Please fill in all fields' +
            '</div>';
        const form = document.querySelector('#todo-form');
        div.innerHTML = alertHTML;
        form.insertBefore(div, null);

    } else {

        tasks1.addTasks(name, description, assignedTo, dueDate)
        tasks1.render();
        tasks1.save();
        taskName.value = ''
        taskDescription.value = ''
        taskAssignedTo.value = ''
        taskDueDate.value = ''

    }

};



const formSubmitBtn = document.querySelector('#formSubmitBtn');
formSubmitBtn.addEventListener("click", validFormFieldInput);


let taskList = document.querySelector("#taskList");
//checks to see if mark as done was clicked
taskList.addEventListener('click', (event) => {
    let doneClicked = event.target.classList.contains('done-button')

    if (doneClicked) {
        taskList = event.target.closest("li");
        let taskId = Number(taskList.id);
        let task = tasks1.getTaskById(taskId);
        task.status = "DONE";
        tasks1.render();


    }
    if (event.target.classList.contains('delete-button')) {
        let parentTask = event.target.parentElement.parentElement.parentElement;
        let deleteId = Number(parentTask.id);
        tasks1.deleteTask(deleteId);
        tasks1.save();
        tasks1.render();



    }
}) 