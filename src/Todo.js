import { React } from "react";
import { compose } from 'redux';
import withTodoActions from "./HOCS/WithActions/todo";

function Todo({ todo, completeTodo, removeTodo, editTodo }) {
	const changeHandler = (e) => {
		const newText = e.target.value;
		const newTodo = {
			...todo,
			text: newText
		}
		editTodo(newTodo);
	}

	return (
		<div>
			<input onChange={changeHandler} type="text" value={todo.text} />
			<button onClick={() => completeTodo(todo)}>
				{todo.isComplete === false ? "Complete" : "Restore"}
			</button>
			<button onClick={() => removeTodo(todo.key)}>X</button>
		</div>
	);
}

export default compose(withTodoActions)(Todo);