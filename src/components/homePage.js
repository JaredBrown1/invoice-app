import SideBar from "./sideBar";
import InvoiceList from "./invoiceList";
import { MainCont } from "../styles/appStyles";
import { Route } from "react-router-dom";

function Homepage() {
	return (
		<MainCont className="App">
			<SideBar />
			<InvoiceList />
		</MainCont>
	);
}

export default Homepage;
