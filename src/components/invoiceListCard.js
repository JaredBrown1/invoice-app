import React from "react";
import { CardCont } from "../styles/invoiceListCardStyles";

const ListCard = (props) => {
	return (
		<CardCont>
			<h2>{props.id}</h2>
			<p>{props.paymentDue}</p>
			<p>{props.clientName}</p>
			<h2>{props.items.total}</h2>
			<p>{props.status}</p>
		</CardCont>
	);
};

export default ListCard;
