import React, { useState, useContext } from 'react';
import './App.css';
import TodoList from './TodoList';
import uuid from 'uuid/v1';
import Theme from './contexts/Theme'

function App() {
  // Using contexts for rendering UI dark/light mode
  const uis = useContext(Theme);
  const theme = uis.isLightTheme ? 'light' : 'dark';

  const [tasks, setTasks] = useState([
    {task: "Cuci Baju", id: uuid()},
    {task: "Masak Nasi", id: uuid()}
  ]);

  // Add New Task Feature
  const addTasks = (newtask) => {
    setTasks([...tasks, {task: newTask, id: uuid()}]);
  };

  const [newTask, setNewTask] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
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

  const handleUI = () => {
    if(uis.isLightTheme){
        uis.isLightTheme = false;
    } else {
        uis.isLightTheme = true;
    }
    }

  return (
    <div className="App" style={{ background: uis[theme].ui, color:uis[theme].syntax}}>
      <button onClick={handleUI}>Change Theme</button>
      <h1>Pekerjaan Rumah Yang Perlu Dilakukan</h1>
      <form>
        <label>
          Tulis Pekerjaan
          <input type='text' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        </label>
        <button onClick={handleSubmit}>Tambah</button>
      </form>
      <TodoList tasks={tasks} remove={remove.bind(App)} theme={uis[theme]} />
    </div>
  );
}

export default App;
