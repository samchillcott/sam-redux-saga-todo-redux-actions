import "./App.css";
import Todo from "./Todo";
import React, { useState, useEffect } from "react";

import { connect, useDispatch } from 'react-redux';
import { addTodo, completeTodo, removeTodo, editTodo } from "./redux/actions";

function App(props) {
	const { todos, addTodo, completeTodo, removeTodo, editTodo } = props;
	const [value, setValue] = useState("");
	const dispatch = useDispatch();

	// Pulls saved data from Firebase on initialization
	useEffect(() => {
		dispatch({type: 'DOWNLOAD_TODOS'});
	}, []);

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


const mapStateToProps = ({ todos }) => ({
	todos 
});

const mapDispatchToProps = (dispatch) => ({
	addTodo: (payload) => dispatch(addTodo(payload)),
	completeTodo: (payload) => dispatch(completeTodo(payload)),
	removeTodo: (payload) => dispatch(removeTodo(payload)),
	editTodo: (payload) => dispatch(editTodo(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);