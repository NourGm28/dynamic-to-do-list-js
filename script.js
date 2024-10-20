// document.addEventListener('DOMContentLoaded', () =>{
//     const addButton = document.getElementById('add-task-btn');
//     const taskInput = document.getElementById('task-input');
//     const taskList = document.getElementById('task-list');
//     function addTask(){
//         let taskText = document.getElementById('task-input').value.trim();
//         if (taskText !== " "){
//             let textContent = document.createElement('li');
//             textContent = taskText;
//             let btn = document.createElement('button');
//             btn.textContent = "Remove";
//             btn.className = "remove-btn";
//             addButton.addEventListener('click', function (){
//                 taskList.removeChild(textContent);
//                 btn.appendChild(textContent);
//                 taskList.appendChild(textContent);
//                 taskInput.value = "";
//             })
//             let addTask = document.addEventListener('click',(addButton) =>{
//             taskInput.document.addEventListener("keypress", function(event){
//                 if (event.key === 'Enter'){
//                     addTask();
//                 }
//             }
//             )
//             })
//         }else {
//             alert("Please enter a task");
//         }
//     }
//     document.addEventListener('DOMContentLoaded',(addTask));
// })
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        let taskText = taskInput.value.trim();
        if (taskText !== "") {
            let listItem = document.createElement('li');  // Create a new list item (li)
            listItem.textContent = taskText;              // Set the text content of the li
            taskInput.value = "";                         // Clear the input field

            // Create a Remove button
            let btn = document.createElement('button');
            btn.textContent = "Remove";
            btn.className = "remove-btn";
            
            // Remove task on button click
            btn.addEventListener('click', function () {
                taskList.removeChild(listItem);  // Remove the list item when clicked
            });

            listItem.appendChild(btn);           // Add the Remove button to the list item
            taskList.appendChild(listItem);      // Add the list item to the task list
        } else {
            alert("Please enter a task");
        }
    }

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when pressing "Enter" in the input field
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
