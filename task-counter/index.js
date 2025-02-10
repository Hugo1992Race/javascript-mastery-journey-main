const taskInput = document.getElementById('taskInput');
        const addTaskButton = document.getElementById('addTaskButton');
        const taskCount = document.getElementById('taskCount');
        const taskList = document.getElementById('taskList');

        let tasks = [];

        addTaskButton.addEventListener('click', () => {
            const taskText = taskInput.value.trim();
            if (taskText) {
                tasks.push(taskText);
                updateTaskList();
                taskInput.value = '';
            }
        });

        function updateTaskList() {
            taskList.innerHTML = '';
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.textContent = task;
                taskList.appendChild(li);
            });
            taskCount.textContent = tasks.length;
        }