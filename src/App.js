import "./App.css";

import SideBar from "./components/sideBar";
import InvoiceList from "./components/invoiceList";

function App() {
	return (
		<div className="App">
			<SideBar />
			<InvoiceList />
		</div>
	);
}

export default App;
