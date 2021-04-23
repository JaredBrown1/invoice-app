import React from "react";
import { ListCont } from "../styles/invoiceListStyles";

const InvoiceList = () => {
	return (
		<ListCont>
			<h1>Invoices</h1>
			<p># of total invoices</p>
			<p>filter dropdown</p>
			<button>new invoice</button>
			<div>mapped invoice data here</div>
		</ListCont>
	);
};

export default InvoiceList;
