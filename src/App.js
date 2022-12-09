import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const getDays = () => {
	let date = new Date();
	let month = date.getMonth();
	let days = [];
	while (date.getMonth() === month) {
		days.push(new Date(date).getDate());
		date.setDate(date.getDate() + 1);
	}
	return days;
};

const NewHeader = () => {
	const [presentDate, setPresentDate] = useState(new Date());
	const month = presentDate.getMonth();
	const days = getDays();
	const handleDateClick = (e) => {
		setPresentDate(
			new Date(presentDate.getFullYear(), month, e.currentTarget.id)
		);
	};
	return (
		<div className="header">
			<h1 className="container">Shop List</h1>
			<p className="container">Date: {presentDate.toDateString()}</p>
			<div>
				<ul className="days" id="days">
					{days.map((day, index) => {
						return (
							<li
								id={day}
								key={index}
								className="day"
								onClick={handleDateClick}
							>
								{day}
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

function App() {
	return (
		<div className="App">
			<NewHeader />
		</div>
	);
}

export default App;
