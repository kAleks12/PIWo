"use strict";

let taskId = 0;
let deletedTask = null;
let selectedList = document.getElementById('list-table').value;

const taskList = document.getElementById('task-list');
const taskInput = document.getElementById('add-task');

const addElement = () => {
    const text = taskInput.value;

    if (text === '') {
        return;
    }

    const newTask = createTask(text);
    taskList.appendChild(newTask);
    taskInput.value = '';
}

const createTask = (text) => {
    const task = document.createElement('div');

    task.type = selectedList;
    task.classList.add('task', 'round');
    task.onclick = () => toggleTask(task);
    task.id = taskId;

    taskId++;
    addDescription(task, text);
    addButton(task);

    return task;
}

const addDescription = (task, text) => {
    const taskDescription = document.createElement('p');
    taskDescription.innerHTML = text;
    task.appendChild(taskDescription);
}

const addButton = (task) => {
    const taskButton = document.createElement('button');
    taskButton.innerHTML = 'X';
    taskButton.classList = 'delete-button';
    taskButton.onclick = (e) => deleteButtonClick(e, task);

    task.appendChild(taskButton);
}

const deleteButtonClick = (e, task) => {
    e.stopPropagation();

    $('#confirm-button').off('click').click(() => {
        $(task).remove();
        deletedTask = task;
        closePrompt();
    });

    $('#delete-dialog').show();
}

const closePrompt = () => $('#delete-dialog').hide();

const toggleTask = (task) => {
    const isDone = task.classList.toggle('done-task');

    if (!isDone) {
        removeDate(task);
        return;
    }

    const date = createDate();
    task.appendChild(date);
}

const createDate = () => {
    const date = new Date().toLocaleString();
    const p = document.createElement('p');
    p.innerHTML = date;

    return p;
}

const removeDate = (e) => {
    const firstChild = e.firstChild;
    const secondChild = firstChild.nextSibling;
    e.innerHTML = '';
    e.appendChild(firstChild);
    e.appendChild(secondChild);
}

$(document).keypress('Z', (e) => {
    if (deletedTask === null || !e.ctrlKey || deletedTask.type !== selectedList) {
        return;
    }

    deletedTask.classList.remove('deleted-todo');

    removeDate(deletedTask);
    taskList.appendChild(deletedTask);
    deletedTask = null;
})

$(document).on('keypress',function(e) {
    if(e.which !== 13 || taskInput.value === '') {
       return;
    }

    addElement();
})