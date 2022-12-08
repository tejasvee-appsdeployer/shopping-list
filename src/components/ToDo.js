import React from "react";

const ToDo = ({ todo, handleToggle, handleFilter }) => {
	const handleClick = (e) => {
		e.preventDefault();
		handleToggle(e.currentTarget.id);
	};
	return (
		<div
			className={todo.complete ? "strike" : ""}
			id={todo.id}
			// key={todo.id + todo.task}
			name="todo"
			onClick={handleClick}
		>
			{todo.task}
		</div>
	);
};
export default ToDo;
