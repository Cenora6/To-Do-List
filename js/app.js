document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM');

    const form = document.getElementsByClassName('toDoForm')[0];
    const input = document.getElementById('taskInput');

    input.addEventListener('focus', function () {
        form.classList.add('focusInput');
    });

    input.addEventListener('focusout', function () {
        form.classList.remove('focusInput')
    })

});
