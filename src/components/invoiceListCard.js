import React from "react";
import { CardCont } from "../styles/invoiceListCardStyles";

const ListCard = () => {
	return (
		<CardCont>
			<h2>#RT3080</h2>
			<p>Due 19 aug 2021</p>
			<p>Jensen Huang</p>
			<h2>$1,800.90</h2>
			<p>Paid</p>
		</CardCont>
	);
};

export default ListCard;
