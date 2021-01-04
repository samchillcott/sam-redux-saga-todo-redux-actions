import "./App.css";
import Todo from "./Todo";
import React, { useState, useEffect } from "react";

import { compose } from "redux";
import withTodoActions from "./HOCS/WithActions/todo";
import withTodoData from "./HOCS/WithData/todo";

function App({ todos, addTodo, completeTodo, removeTodo, editTodo, getTodos }) {
	const [value, setValue] = useState("");

	// Pulls saved data from Firebase on initialization
	useEffect(() => {
		getTodos()
	}, [getTodos]);

	// Grabs text value from form and call addTodo function
	const submitHandler = (e) => {
		e.preventDefault();
		addTodo(value);
		setValue("");
	};

	// Filtering for 2 Lists
	const doneTasks = todos.filter((todo) => todo.isComplete === true);
	const incompleteTasks = todos.filter((todo) => todo.isComplete === false);

	return (
		<div className="App">
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={value}
					placeholder="Add Todo"
					onChange={(e) => setValue(e.target.value)}
				/>
			</form>

			<div className="complete">
				<h3>INCOMPLETE TASKS</h3>
				{incompleteTasks.map((todo, key) => {
					return (
						<Todo
							key={key}
							todo={todo}
							completeTodo={completeTodo}
							removeTodo={removeTodo}
							editTodo={editTodo}
						/>
					);
				})}
			</div>

			<div className="done">
				<h3>COMPLETE TASKS</h3>
				{doneTasks.map((todo, key) => {
					return (
						<Todo
							key={key}
							todo={todo}
							completeTodo={completeTodo}
							removeTodo={removeTodo}
							editTodo={editTodo}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default compose(withTodoActions, withTodoData)(App);