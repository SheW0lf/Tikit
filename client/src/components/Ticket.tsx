import React from 'react';

type Label = ['bug', 'ticket'];

interface TicketProps {
	title: string;
	tags: Label[] | Label;
	date: string;
}

const Ticket = ({ title, tags, date }: TicketProps) => {
	return <div></div>;
};

export default Ticket;
