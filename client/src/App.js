import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import uuid from 'uuid/v1';

function App() {
  const [tasks, setTasks] = useState([
    {task: "Cuci Baju", id: uuid()},
    {task: "Masak Nasi", id: uuid()}
  ]);

  // Add New Task Feature
  const addTasks = (newtask) => {
    setTasks([...tasks, {task: newTask, id: uuid()}]);
    console.log(tasks);
  };

  const [newTask, setNewTask] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newTask);
    if(newTask === ''){
      return;
    }
    addTasks(newTask);
    setNewTask('');
  };

  // Delete Task Feature
  const remove = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="App">
      <h1>Pekerjaan Rumah Yang Perlu Dilakukan</h1>
      <form>
        <label>
          Tulis Pekerjaan
          <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        </label>
        <button onClick={handleSubmit}>Tambah</button>
      </form>
      <TodoList tasks={tasks} remove={remove.bind(App)} />
    </div>
  );
}

export default App;
