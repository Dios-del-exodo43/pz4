"use strict";

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector("#addTask");
const taskList = document.getElementById("taskList");

//додавання нового завдання
function addNewTask() {
    const taskText = taskInput.value.trim();

    if (taskText) {
        //створює новоий елемент у списку
        const li = document.createElement("li");
        li.textContent = taskText;

        //додавання елемента до списку
        taskList.appendChild(li);

        //очищення поля
        taskInput.value = "";
        // перевірка
        console.log(`Додано нове завдання: "${taskText}"`);
    } else {
        console.log("Поле введення порожнє. Введіть завдання.");
    }
}

//Видалення завдання при кліку на нього 
function handleTaskClick(event) {
    if (event.target.tagName === "LI") {
        const taskText = event.target.textContent;
        event.target.remove();
        console.log(`Видалено завдання: "${taskText}"`);
    }
}

//обробники подій
addTaskButton.addEventListener("click", addNewTask);
taskList.addEventListener("click", handleTaskClick);

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addNewTask();
    }
});


taskList.addEventListener("click", function(event) {
    console.log("Фаза спливання: клік на списку завдань");
}, false);

taskList.addEventListener("click", function(event) {
    console.log("Фаза захоплення: клік на списку завдань");
}, true);

console.log("Скрипт успішно підключено та готовий до роботи");