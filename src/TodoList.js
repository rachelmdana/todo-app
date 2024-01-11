import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        setTodos((prevTodos) => [...prevTodos, { task, id: Date.now() }]);
    };

    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} removeTodo={() => removeTodo(todo.id)} />
            ))}
        </div>
    );
}

export default TodoList;