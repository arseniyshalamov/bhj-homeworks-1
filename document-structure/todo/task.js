const tasksInput = document.querySelector(".tasks__input");
const tasksAdd = document.querySelector(".tasks__add");
const tasksList = document.querySelector(".tasks__list");

function addToDo() {
    tasksList.insertAdjacentHTML('afterend', `<div class="task"><div class="task__title">Сходить в магазин</div><a href="#" class="task__remove">&times;</a></div>`);
    tasksInput.value = '';

    const closest = document.querySelector(".task__remove");
    closest.addEventListener('click', elem => {
        elem.target.closest(".task").remove();
    })
}

tasksAdd.addEventListener('click', elem => {
    elem.preventDefault();
    if (tasksInput.value.trim() !== '') {
        addToDo();
    }
})

