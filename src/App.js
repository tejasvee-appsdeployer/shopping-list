import "./App.css";
import ListView from "./components/ListView";

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

function App() {
	return (
		<div className="App">
			<ListView className="list-item" data={data} heading={"Yesterday's"} />
			<ListView className="list-item" data={data} heading={"Today's"} />
			<ListView className="list-item" data={data} heading={"Tommorow's"} />
		</div>
	);
}

export default App;
