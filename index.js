//Form validation function
//Currently gets values from inputs in form and console logs them
function validFormFieldInput(data) {
//inputs and their values
    const taskName = document.querySelector('#taskname');
    const name = taskName.value;

    const taskDescription = document.querySelector('#discription');
    const  description = taskDescription.value;
   
    const taskAssignedTo = document.querySelector('#select');
    const assignedTo = taskAssignedTo.value; 
   
    const taskDateAssigned = document.querySelector('#assign-to');
    const dateAssigned = taskDateAssigned.value;
 
    const taskDueDate = document.querySelector('#Duedate');
    const dueDate = taskDueDate.value;
   
    console.log(`Name: ${name}, Description: ${description}, Assigned To: ${assignedTo}, Date Assigned: ${dateAssigned}, Due Date: ${dueDate}`);
//form validation
    if(name==""||description==""||assignedTo==""||dateAssigned==""||dueDate==""){
        
        
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
        const errorMsg = document.querySelector('#errorMsg');
        errorMsg.remove();
    }

};

//On click of form button the validFormSubmitBtn function gets called
const formSubmitBtn = document.querySelector('#formSubmitBtn');
formSubmitBtn.addEventListener("click", validFormFieldInput);

