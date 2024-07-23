document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            taskItem.classList.add('completed');
            document.getElementById('task-list').appendChild(taskItem);
            // Toca um som de 'ding' quando a tarefa é marcada como concluída
            new Audio('ding.mp3').play();
        } else {
            taskItem.classList.remove('completed');
        }
    });

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', function() {
        taskItem.style.backgroundColor = '#fdd';
        new Audio('delete.wav').play(); // Toca o som ao deletar a tarefa
        setTimeout(() => taskItem.remove(), 500);
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(deleteButton);

    document.getElementById('task-list').appendChild(taskItem);
    new Audio('add.wav').play(); // Toca o som ao adicionar a tarefa
    document.getElementById('new-task').value = '';
});
