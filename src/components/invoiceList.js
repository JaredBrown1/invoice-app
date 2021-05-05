import React from "react";
import { ListCont, InfoBar } from "../styles/invoiceListStyles";

import ListCard from "./invoiceListCard";

import Data from "../data/data.json";

const InvoiceList = () => {
	const handleClick = (e) => {
		const id = e.target.id;
		console.log("Hello world!!!!!");
		console.log(id);
	};

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
			{Data.map((invoices) => {
				return (
					<ListCard onClick={handleClick} key={invoices.id} {...invoices} />
				);
			})}
		</ListCont>
	);
};

export default InvoiceList; // REACT ROUTER RENDER PROPERTY TO RENDER SPECIFIC COMPONENT ONCLICK
