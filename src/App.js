import SideBar from "./components/sideBar";
import InvoiceList from "./components/invoiceList";
import { MainCont } from "./styles/appStyles";

function App() {
	return (
		<MainCont className="App">
			<SideBar />
			<InvoiceList />
		</MainCont>
	);
}

export default App;
