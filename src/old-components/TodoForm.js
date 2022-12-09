import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
	const [userInput, setUserInput] = useState("");
	const handleChange = (e) => {
		setUserInput(e.currentTarget.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (userInput.length > 1) addTask(userInput);
		setUserInput("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				value={userInput}
				type="text"
				onChange={handleChange}
				placeholder="Enter Item name:"
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default TodoForm;
