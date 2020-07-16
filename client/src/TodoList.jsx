import React from "react";

export default function TodoList(props) {
  const removeTask = (id) => {
    props.remove(id);
  }
  const theme = props.theme;
  
  return (
    <div className='list'>
      {props.tasks.map(task => {
        return( 
        <div className='list__block' key={task.id} style={{color: theme.syntax}}>
          <li className='list__item'> 
            {task.task} 
          </li>
          <button className='list__button' id={task.task} onClick={removeTask.bind(TodoList, task.id)}
          style={{color: theme.syntax, background: theme.bg}}
          >Hapus</button>
        </div>
        );
      })}
    </div>
  );
}
