const ToDo = ({ todo, handleToggle, handleFilter }) => {
	return (
		<div className={todo.complete ? "strike" : ""} onClick={handleToggle}>
			{todo.task}
		</div>
	);
};
export default ToDo;
