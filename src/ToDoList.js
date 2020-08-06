import React from 'react';

import ToDo from './ToDo.js';

const ToDoList = props => {
    return (
        <div className='todo-list'>
            {props.todos.map(item => (
                <ToDo key={item.id} item={item} toggleItem= {props.toggleItem}/>
                ))}
            <button className='clear-button' onClick={props.clearCompleted}>
                Clear Completed ToDos
            </button>
        </div>
    );
};

export default ToDoList;