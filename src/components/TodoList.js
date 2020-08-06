import React from 'react';

import styled from 'styled-components';

import ToDo from './ToDo.js';

const ToDoList = props => {
    return (
        <ToDoListContainer>
            {props.todos.map(task => (
                <ToDo key={task.id} task={task} toggleTask= {props.toggleTask}/>
                ))}
            <button className='clear-button' onClick={props.clearCompleted}>
                Clear Completed
            </button>
        </ToDoListContainer>
    );
};

export default ToDoList;

const ToDoListContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;

    button {
        background-color: white;
        border: .1rem solid white;
        border-radius: .5rem;
        margin: .4rem;
        color: black;
        font-size: 1rem;
        width: 60%;
    }
`

