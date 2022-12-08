import ToDo from "./ToDo";

const ToDoList = ({ list }) => {
	return (
		<div>
			{list.map((todo) => {
				return <ToDo todo={todo} />;
			})}
		</div>
	);
};
export default ToDoList;
