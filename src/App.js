import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import TodoForm from "./components/TodoForm";

const data = [
	{
		id: 1,
		task: "Give dog a bath",
		complete: true,
	},
	{
		id: 2,
		task: "Do laundry",
		complete: true,
	},
	{
		id: 3,
		task: "Vacuum floor",
		complete: false,
	},
	{
		id: 4,
		task: "Feed cat",
		complete: true,
	},
	{
		id: 5,
		task: "Change light bulbs",
		complete: false,
	},
	{
		id: 6,
		task: "Go to Store",
		complete: true,
	},
	{
		id: 7,
		task: "Fill gas tank",
		complete: true,
	},
	{
		id: 8,
		task: "Change linens",
		complete: false,
	},
	{
		id: 9,
		task: "Rake leaves",
		complete: true,
	},
	{
		id: 10,
		task: "Bake Cookies",
		complete: false,
	},
	{
		id: 11,
		task: "Take nap",
		complete: true,
	},
	{
		id: 12,
		task: "Read book",
		complete: true,
	},
	{
		id: 13,
		task: "Exercise",
		complete: false,
	},
	{
		id: 14,
		task: "Give dog a bath",
		complete: false,
	},
	{
		id: 15,
		task: "Do laundry",
		complete: false,
	},
	{
		id: 16,
		task: "Vacuum floor",
		complete: false,
	},
	{
		id: 17,
		task: "Feed cat",
		complete: true,
	},
	{
		id: 18,
		task: "Change light bulbs",
		complete: false,
	},
	{
		id: 19,
		task: "Go to Store",
		complete: false,
	},
	{
		id: 20,
		task: "Fill gas tank",
		complete: false,
	},
];

function App() {
	const [todolist, setTodolist] = useState(data);

	const handleToggle = (id) => {
		let mapped = todolist.map((task) => {
			return task.id == id
				? { ...task, complete: !task.complete }
				: { ...task };
		});
		setTodolist(mapped);
	};

	const handleFilter = (id) => {
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
		<div className="App">
			<Header />
			<TodoForm addTask={addTask} />
			<ToDoList
				list={todolist}
				handleFilter={handleFilter}
				handleToggle={handleToggle}
			/>
		</div>
	);
}

export default App;
