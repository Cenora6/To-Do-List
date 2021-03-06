document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM');

    const date = new Date;
    const day = date.getDate();
    const month = date.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
        "October", "November", "December"];
    const year = date.getFullYear();

    const form = document.getElementsByClassName('toDoForm')[0];
    const input = document.getElementById('taskInput');
    const button = document.getElementById('addTaskButton');
    const list = document.getElementById('taskList');

    const progressBar = document.getElementById('bar');
    const bar = document.getElementById('progress');
    const barWidth = progressBar.clientWidth;

    changeProgress();

    function changeProgress () {
        let completedTasks = document.querySelectorAll('.finished').length;
        let allListElements = list.children.length;
        let progressWidth = completedTasks / allListElements;
        let progress = progressWidth * barWidth;
        bar.style.width = progress + "px";
        bar.innerText = Math.floor(progressWidth * 100) + "%";

        if(list.children.length === 0) {
            bar.style.width = "0px";
            bar.innerText = 0 + "%";
        }
    }

    input.addEventListener('focus', function () {
        input.classList.remove('error');
        label.classList.remove('errorLabel');
        label.innerText = "task";
        form.classList.add('focusInput');
    });

    input.addEventListener('focusout', function () {
        form.classList.remove('focusInput')
    });

    const label = document.querySelector('.label');

    button.addEventListener('click', function (e) {
        e.preventDefault();


        if(input.value !== "") {
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
            changeProgress();

        } else {
            input.classList.add('error');
            label.innerText = "task can't be empty";
            label.classList.add('errorLabel');
        }

    });


    list.addEventListener('click', function (e) {
        let deleteElement = e.target;
        if(deleteElement.className === 'fas fa-times-circle icon-hover') {
            const toDelete = deleteElement.parentElement.parentElement.parentElement.parentElement;
            toDelete.remove();
            changeProgress();
        }
    });


    list.addEventListener('click', function (e) {
        let checkElement = e.target;
        if(checkElement.className === 'fas fa-check-circle icon-hover') {
            const toCheck = checkElement.parentElement.parentElement.parentElement;
            toCheck.classList.toggle('finished');
            changeProgress();
        }
    });

    const deleteAllButton = document.getElementById('removeFinishedTasksButton');
    const finishedTasks = document.querySelectorAll('.finished');


    deleteAllButton.addEventListener('click', function (e) {
        e.preventDefault();

        for (let i = 0; i < finishedTasks.length; i++) {
            finishedTasks[i].parentElement.remove();
            changeProgress()
        }
    });
});
