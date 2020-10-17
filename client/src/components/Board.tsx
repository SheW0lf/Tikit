import React from 'react';
import Ticket from './Ticket';

export function Board() {
	type Props = {
		title: string;
		content?: JSX.Element[];
	};

	const TicketInfo = (
		<Ticket
			title="example title"
			tags={['bug', 'ticket']}
			date="todays date"
		></Ticket>
	);

	const Column = ({ title, content }: Props) => {
		return (
			<div className="bg-dark-blue min-h-full">
				<h3 className="text-green text-center p-2 text-2xl">{title}</h3>
				{content}
			</div>
		);
	};
	return (
		<div className="grid grid-cols-4 bg-blue gap-6 m-10 p-6 min-h-screen">
			<Column
				title="To Do"
				content={[TicketInfo, TicketInfo, TicketInfo, TicketInfo]}
			/>
			<Column title="In Progress" />
			<Column title="Needs Review" />
			<Column title="Done" />
		</div>
	);
}
