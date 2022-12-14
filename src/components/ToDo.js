import React from "react";

const ToDo = ({ index, todo, handleToggle, handleFilter }) => {
	const handleClick = (e) => {
		e.preventDefault();
		handleToggle(e.currentTarget.id);
	};

	return (
		<div
			className={todo.complete ? "strike" : ""}
			id={todo.id}
			name="todo"
			onClick={handleClick}
		>
			<div>
				{index + 1}
				{". "} {todo.task}
			</div>
		</div>
	);
};
export default ToDo;
