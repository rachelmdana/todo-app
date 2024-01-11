import React, { useState } from 'react';

function NewTodoForm({ addTodo }) {
    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Task:
                <input
                    type="text"
                    value={task}
                    onChange={handleChange} />
            </label>
            <button type="submit">Add ToDo</button>
        </form>
    );
}

export default NewTodoForm;