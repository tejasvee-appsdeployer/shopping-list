import React from "react";

function Lists() {
	const handleClick = (e) => {
		const element = e.currentTarget;
		if (element.className.includes("striked")) {
		} else {
			element.className += " striked";
		}
	};

	const items = ["buy apples", "buy radio", "clear garage"];
	return (
		<div className="container mt-4">
			<ol>
				{items.map((item, index) => {
					return (
						<div className="input-group mb-3" key={index} id={item}>
							<div className="input-group-text">
								<input
									className="form-check-input mt-0"
									type="checkbox"
									value=""
									onChange={handleClick}
								/>
							</div>
							<input
								className="form-control"
								id="item-input"
								value={item}
								disabled
							/>
						</div>
					);
				})}
			</ol>
		</div>
	);
}

export default Lists;
