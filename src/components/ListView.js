import React, { useState } from "react";
import Header from "./Header";
import TodoForm from "./TodoForm";
import ToDoList from "./ToDoList";

const ListView = ({ data, heading }) => {
	const [todolist, setTodolist] = useState(data);
	const [checked, setChecked] = useState(0);

	const handleToggle = (id) => {
		setChecked(checked + 1);
		let mapped = todolist.map((task) => {
			return task.id == id
				? { ...task, complete: !task.complete }
				: { ...task };
		});
		setTodolist(mapped);
	};

	const handleFilter = (id) => {
		setChecked(0);
		let filtered = todolist.filter((task) => {
			return !task.complete;
		});
		setTodolist(filtered);
	};

	const addTask = (userInput) => {
		let copy = [...todolist];
		copy.push({ id: todolist.length + 1, task: userInput, complete: false });
		setTodolist(copy);
	};
	return (
		<div>
			<Header heading={heading} />
			<TodoForm addTask={addTask} />
			<h3>Checked items: {checked}</h3>
			<ToDoList
				list={todolist}
				handleFilter={handleFilter}
				handleToggle={handleToggle}
			/>
		</div>
	);
};
export default ListView;
