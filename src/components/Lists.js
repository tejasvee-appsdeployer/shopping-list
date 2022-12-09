import React, { useState } from "react";

function Lists() {
	const [items, setItems] = useState([
		"buy apples",
		"buy radio",
		"clear garage",
	]);

	const [userInput, setUserInput] = useState("");

	const handleInputItem = (e) => {
		e.preventDefault();
		setUserInput(e.currentTarget.value);
	};

	const addItem = () => {
		setItems([...items, userInput]);
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
				{items.map((item, index) => {
					return (
						<div className="input-group mb-3" key={index}>
							<div className="input-group-text">
								<input
									className="form-check-input mt-0"
									type="checkbox"
									id={item}
									value=""
								/>
							</div>
							<div className="form-control" id="item-input" disabled>
								{item}
							</div>
						</div>
					);
				})}
			</ol>
		</div>
	);
}

export default Lists;
