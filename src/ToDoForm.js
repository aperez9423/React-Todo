import React from 'react';

import styled from 'styled-components';

class ToDoForm extends React.Component {
    constructor() {
        super();
        this.state ={
            task:''
        };
    };
    
    handleChanges = e => {
        this.setState({task: e.target.value})
    };

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({task: ''})
    };

    render () {
        return (
            <ToDoFormContainer onSubmit ={this.submitTask}>
                <input
                    type= 'text'
                    name= 'task'
                    value= {this.state.task}
                    onChange= {this.handleChanges}
                />
                <button>Add To Do</button>
            </ToDoFormContainer>
        );
    };
};

export default ToDoForm;

const ToDoFormContainer = styled.form `
    width: 50%;
    display: flex;
    justify-content: flex-end;

    input {
        background-color: #2d2d37;
        border: 0;
        padding-left: 1rem;
        width: 20vw;
        outline: 0;
        color: white;
        border-bottom: .2rem solid purple;
        margin-right: 1rem;
    }
    
    button {
        background-color: white;
        border: .1rem solid white;
        border-radius: 1rem;
        font-size: 1rem;
    }
`