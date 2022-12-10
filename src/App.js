import NewHeader from "./components/NewHeader";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Lists from "./components/Lists";
import { useState } from "react";

function App() {
	const [presentDate, setPresentDate] = useState(new Date());
	const [items, setItems] = useState([
		{ name: "Apples", done: false, date: presentDate },
	]);
	return (
		<div className="App container">
			<NewHeader presentDate={presentDate} setPresentDate={setPresentDate} />
			<Lists items={items} setItems={setItems} presentDate={presentDate} />
		</div>
	);
}

export default App;
