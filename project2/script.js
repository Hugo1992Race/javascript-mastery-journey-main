document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Пожалуйста, введите задачу.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Выполнить';
    completeButton.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    const considerationButton = document.createElement('button');
    considerationButton.textContent = 'На рассмотрение';
    considerationButton.addEventListener('click', function() {
        li.after('no progress')
    });


    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    li.appendChild(considerationButton)
    document.getElementById('todo-list').appendChild(li);
    input.value = '';
});