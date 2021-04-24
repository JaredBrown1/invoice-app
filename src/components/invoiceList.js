import React from "react";
import { ListCont, InfoBar } from "../styles/invoiceListStyles";

import ListCard from "./invoiceListCard";

const InvoiceList = () => {
	return (
		<ListCont>
			<InfoBar>
				<div>
					<h1>Invoices</h1>
					<p># of total invoices</p>
				</div>
				<p>filter dropdown</p>
				<button>new invoice</button>
			</InfoBar>
			<ListCard />
			<ListCard />
			<ListCard />
		</ListCont>
	);
};

export default InvoiceList;
