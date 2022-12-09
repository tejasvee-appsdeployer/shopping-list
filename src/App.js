import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NewHeader = () => {
	const [presentDate, setPresentDate] = useState(new Date());
	const date = new Date();
	const month = date.getMonth();
	const days = [];
	while (date.getMonth() === month) {
		days.push(new Date(date).getDate());
		date.setDate(date.getDate() + 1);
	}
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
				<ul className="days">
					{days.map((day, index) => {
						return (
							<li id={day} key={index} className="" onClick={handleDateClick}>
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
