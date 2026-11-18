
let tasks = [];

let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let remaining = document.getElementById("remaining");


function addTask() {

    let text = input.value.trim();


    if (text === "") {
        return;
    }

    // Store task as object
    let task = {
        text: text,
        done: false
    };

    tasks.push(task);

    input.value = "";

    displayTasks();
}


addBtn.addEventListener("click", addTask);


input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        addTask();
    }

});

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        let li = document.createElement("li");

        let span = document.createElement("span");

        span.innerText = task.text;

        span.className = "task-text";

        if (task.done) {
            span.classList.add("done");
        }

        span.addEventListener("click", function() {

            tasks[index].done = !tasks[index].done;

            displayTasks();

        });

      
        let deleteBtn = document.createElement("button");

        deleteBtn.innerText = "Delete";

        deleteBtn.className = "delete";

        deleteBtn.addEventListener("click", function() {

            tasks.splice(index, 1);

            displayTasks();

        });

        li.appendChild(span);

        li.appendChild(deleteBtn);

        taskList.appendChild(li);

    });

    // Count remaining tasks
    let count = tasks.filter(function(task) {
        return task.done === false;
    }).length;

    if (tasks.length === 0) {
        remaining.innerText = "No tasks yet. Add one above!";
    } else {
        remaining.innerText =
            count + " of " + tasks.length + " tasks remaining";
    }

}


displayTasks();
