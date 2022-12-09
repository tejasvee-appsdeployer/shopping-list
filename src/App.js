import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
	{
		id: 1,
		task: "Give dog a bath",
		complete: false,
	},
	{
		id: 2,
		task: "Do laundry",
		complete: false,
	},
	{
		id: 3,
		task: "Vacuum floor",
		complete: false,
	},
	{
		id: 4,
		task: "Feed cat",
		complete: false,
	},
	{
		id: 5,
		task: "Change light bulbs",
		complete: false,
	},
];

const NewHeader = () => {
	const [presentDate, setPresentDate] = useState();
	const date = new Date();
	const month = date.getMonth();
	const days = [];
	while (date.getMonth() === month) {
		days.push(new Date(date).getDate());
		date.setDate(date.getDate() + 1);
	}
	const handleDateClick = (e) => {
		setPresentDate(new Date(date.getFullYear(), month, e.currentTarget.id));
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
			{/* <Header heading={""} />
			<div className="list-view">
				<ListView data={data} heading={"Today's"} />
				<ListView data={data} heading={"Yesterday's"} />
				<ListView data={data} heading={"Tommorow's"} />
			</div> */}
			<NewHeader />
		</div>
	);
}

export default App;
