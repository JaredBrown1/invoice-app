import HomePage from "./components/homePage";
import { Route } from "react-router-dom";

function App() {
	return (
		<>
			<Route exact path="/" component={HomePage} />;
		</>
	);
}

export default App;
