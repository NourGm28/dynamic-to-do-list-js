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
    // Define DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask(taskText, save = true) {
        if (!taskText) {
            taskText = taskInput.value.trim(); // Trim the input to remove extra spaces
        }
        
        if (taskText !== "") {
            // Create a new 'li' element to hold the task
            let listItem = document.createElement('li');
            listItem.textContent = taskText; // Set the task's text

            // Create a Remove button
            let removeButton = document.createElement('button');
            removeButton.textContent = "Remove"; // Set button text to "Remove"
            removeButton.classList.add('remove-btn'); // Add 'remove-btn' class to the button

            // Add an event listener to the Remove button to delete the task
            removeButton.addEventListener('click', () => {
                taskList.removeChild(listItem); // Remove the 'li' element from taskList
                removeTaskFromLocalStorage(taskText); // Remove from localStorage
            });

            // Append the Remove button to the list item
            listItem.appendChild(removeButton);

            // Append the list item to the task list
            taskList.appendChild(listItem);

            // Clear the input field after the task is added
            taskInput.value = "";

            // Save task to localStorage if needed
            if (save) {
                saveTaskToLocalStorage(taskText);
            }
        } else {
            alert("Please enter a task"); // Show an alert if the input field is empty
        }
    }

    // Event listener for "Add Task" button click
    addButton.addEventListener('click', () => {
        addTask(); // Call addTask without parameters to read from input
    });

    // Event listener for "Enter" key press in the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Add task when Enter key is pressed
        }
    });

    // Load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Save task to localStorage
    function saveTaskToLocalStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Remove task from localStorage
    function removeTaskFromLocalStorage(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Load the tasks from localStorage when the page loads
    loadTasks();
});
