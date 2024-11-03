const LOCAL_STORAGE_KEY = 'tasks';

// Função para obter tarefas do LocalStorage
export const getTasks = () => {
  const tasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  return tasks ? JSON.parse(tasks) : [];
};

// Função para adicionar uma nova tarefa
export const addTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};

// Função para deletar uma tarefa
export const deleteTask = (id) => {
  const tasks = getTasks().filter(task => task.id !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
};

// Função para atualizar uma tarefa
export const updateTask = (id, updatedTask) => {
  const tasks = getTasks().map(task => (task.id === id ? { ...task, ...updatedTask } : task));
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}; 