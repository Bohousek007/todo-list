export const loadTask = "loadTask" 
function loadTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = localStorage.getItem('tasks');

    if (tasks) {
        tasks = JSON.parse(tasks);

        // Clear existing tasks
        taskList.innerHTML = "";

        tasks.forEach(function(taskText) {
            var li = document.createElement("li");
            li.className = "taskItem";

            var taskTextNode = document.createTextNode(taskText);
            li.appendChild(taskTextNode);

            var deleteButton = document.createElement("button");
            deleteButton.className = "deleteButton";
            deleteButton.appendChild(document.createTextNode("Delete"));
            deleteButton.onclick = function() {
                taskList.removeChild(li);
                saveTasks();
            };

            li.appendChild(deleteButton);
            taskList.appendChild(li);
        }); // Closing parenthesis was missing here
    }
}
