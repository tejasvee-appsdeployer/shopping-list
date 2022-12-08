import ToDo from "./ToDo";

const ToDoList = ({ list, handleToggle, handleFilter }) => {
	return (
		<div>
			{list.map((todo) => {
				return (
					<ToDo
						todo={todo}
						handleToggle={handleToggle}
						handleFilter={handleFilter}
					/>
				);
			})}
			<button onClick={handleFilter}>Clear Completed</button>
		</div>
	);
};
export default ToDoList;
