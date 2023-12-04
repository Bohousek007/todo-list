export const saveTasks = "saveTasks" 
function saveTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = [];

    for (var i = 0; i < taskList.children.length; i++) {
        var taskText = taskList.children[i].innerText;
        tasks.push(taskText);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}
