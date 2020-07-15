import React from "react";

export default function TodoList(props) {
  const removeTask = (id) => {
    props.remove(id);
  }
  
  return (
    <div>
      {props.tasks.map(task => {
        return <li key={task.id}>{task.task} <button onClick={removeTask.bind(TodoList, task.id)}>Hapus</button></li>;
        // return <li key={task.id}>{task.task} <button>Hapus</button></li>;
      })}
    </div>
  );
}
