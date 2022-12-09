import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ list, handleToggle, handleFilter }) => {
	if (list.length > 0) {
		return (
			<div>
				{list.map((todo, index) => {
					return (
						<ToDo
							index={index}
							todo={todo}
							key={todo.id + todo.task}
							handleToggle={handleToggle}
							handleFilter={handleFilter}
						/>
					);
				})}
				<button onClick={handleFilter}>Clear Completed</button>
			</div>
		);
	} else {
		return <h2>No Item in Cart</h2>;
	}
};
export default ToDoList;
