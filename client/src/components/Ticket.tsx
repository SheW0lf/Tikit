import React from 'react';

type Label = "bug" | "ticket";

interface Details {
	title: string;
	tags: Label[];
	date: string;
};


const Ticket = ({ title, tags, date }: Details) => {
	return (
		<div className="box-border p-4 m-5 border-2 border-pink bg-gray-200 rounded">
			<h3 className="text-green text-start p-2">{title}</h3>
			<p className="text-green text-start p-2">{tags}</p>
			<p className="text-green text-start p-2">{date}</p>
		</div>
	);
};

export default Ticket;
