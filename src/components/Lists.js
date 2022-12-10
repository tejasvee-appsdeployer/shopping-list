import React, { useState } from "react";

function Lists({ items, setItems, presentDate }) {
	const [userInput, setUserInput] = useState("");

	const handleInputItem = (e) => {
		e.preventDefault();
		setUserInput(e.currentTarget.value);
	};

	const addItem = () => {
		const newItem = {
			name: userInput,
			done: false,
			date: presentDate,
		};
		setItems([...items, newItem]);
		setUserInput("");
	};

	return (
		<div className="container mt-4">
			<div className="input-group mb-3">
				<input
					type="text"
					className="form-control"
					placeholder="Add Item to Cart"
					aria-label=""
					aria-describedby="button-addon2"
					onChange={handleInputItem}
					value={userInput}
				/>
				<button
					className="btn btn-primary"
					type="button"
					id="button-addon2"
					onClick={addItem}
				>
					Add
				</button>
			</div>
			<ol>
				{items
					.filter((item) => item.date.getDay() === presentDate.getDay())
					.map((item) => {
						return (
							<li className="input-group mb-3" key={item.name}>
								<div className="input-group-text">
									<input
										className="form-check-input mt-0"
										type="checkbox"
										id={item.name}
										defaultChecked={item.done}
									/>
								</div>
								<div className="form-control" id="item-input" disabled>
									{item.name}
								</div>
							</li>
						);
					})}
			</ol>
		</div>
	);
}

export default Lists;
