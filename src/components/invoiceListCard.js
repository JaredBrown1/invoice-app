import React from "react";
import { CardCont } from "../styles/invoiceListCardStyles";

const ListCard = (props) => {
	const { id, paymentDue, clientName, items, status } = props;
	return (
		<CardCont>
			<h2>{id}</h2>
			<p>{paymentDue}</p>
			<p>{clientName}</p>
			<h2>{items.total}</h2>
			<p>{status}</p>
		</CardCont>
	);
};

export default ListCard;
