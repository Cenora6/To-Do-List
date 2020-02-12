document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM');

    const date = new Date;
    const day = date.getDay();
    const month = date.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];
    const year = date.getFullYear();

    const form = document.getElementsByClassName('toDoForm')[0];
    const input = document.getElementById('taskInput');
    const button = document.getElementById('addTaskButton');
    const list = document.getElementById('taskList');

    input.addEventListener('focus', function () {
        form.classList.add('focusInput');
    });

    input.addEventListener('focusout', function () {
        form.classList.remove('focusInput')
    });


    button.addEventListener('click', function (e) {
        e.preventDefault();

        const newTask = document.createElement('li');
        const date = document.createElement('span');
        date.classList.add('date');

        date.innerText = day + " " + monthNames[month] + " " + year;

        const newDiv = document.createElement('div');
        newDiv.classList.add('task');

        const newP = document.createElement('p');
        newP.innerText = input.value;

        const newLine = document.createElement('span');
        newLine.classList.add('line');

        const icons = document.createElement('div');
        const deleteIcons = document.createElement('div');
        const checkIcons = document.createElement('div');
        deleteIcons.classList.add('delete');
        checkIcons.classList.add('check');

        const checkIcon = document.createElement('i');
        checkIcon.classList.add('fas', 'fa-check', 'icon-default');
        const checkCircle = document.createElement('i');
        checkCircle.classList.add('fas', 'fa-check-circle', 'icon-hover');
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-times', 'icon-default');
        const deleteCircleIcon = document.createElement('i');
        deleteCircleIcon.classList.add('fas', 'fa-times-circle', 'icon-hover');

        checkIcons.appendChild(checkIcon);
        checkIcons.appendChild(checkCircle);

        deleteIcons.appendChild(deleteIcon);
        deleteIcons.appendChild(deleteCircleIcon);

        icons.appendChild(checkIcons);
        icons.appendChild(deleteIcons);

        newDiv.appendChild(newP);
        newDiv.appendChild(newLine);
        newDiv.appendChild(icons);

        newTask.appendChild(date);
        newTask.appendChild(newDiv);

        list.appendChild(newTask);

        input.value = "";
    });

    const checkButton = document.getElementsByClassName('check');
    const deleteButton = document.getElementsByClassName('delete');

    for (let i = 0; i < deleteButton.length; i++) {

        deleteButton[i].addEventListener('click', function () {
            const task = deleteButton[i].parentElement.parentElement.parentElement;
            task.remove();
        });
    }

    for (let i = 0; i < checkButton.length; i++) {
        checkButton[i].addEventListener('click', function () {
            const task = checkButton[i].parentElement.parentElement;
            task.classList.toggle('finished')
        });
    }

    const deleteAllButton = document.getElementById('removeFinishedTasksButton');
    deleteAllButton.addEventListener('click', function (e) {
        e.preventDefault();

        list.innerHTML = '';
    })
});
