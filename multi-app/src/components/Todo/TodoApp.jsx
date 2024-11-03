import { useState, useEffect } from 'react';
import { getTasks, addTask, deleteTask, updateTask } from './TodoService'; // Importa o serviço de tarefas

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks()); // Carrega tarefas do LocalStorage
  }, []);

  const handleAddTask = () => {
    if (task) {
      const newTask = { id: Date.now(), text: task }; // Adiciona um ID único
      addTask(newTask);
      setTasks(getTasks()); // Atualiza a lista de tarefas
      setTask('');
    }
  };

  const handleDeleteTask = (id) => {
    deleteTask(id);
    setTasks(getTasks()); // Atualiza a lista de tarefas
  };

  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task" />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp; 