function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a valid task!");
        return;
    }

    const taskList = document.getElementById("taskList");
    const newTask = createTaskElement(taskText);

    taskList.appendChild(newTask);
    input.value = "";
}

function createTaskElement(taskText) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        li.classList.toggle("completed", checkbox.checked);
    });

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(taskContent);
    li.appendChild(deleteButton);

    return li;
}
