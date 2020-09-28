import React from 'react';

export function Board() {
	type Props = {
		title: string;
	};
	const Column = ({ title }: Props) => {
		return (
			<div className="bg-dark-blue min-h-full">
				<h3 className="text-green text-center p-2">{title}</h3>
			</div>
		);
	};
	return (
		<div className="grid grid-cols-4 bg-blue gap-6 m-10 p-6 min-h-screen">
			<Column title="To Do" />
			<Column title="In Progress" />
			<Column title="Needs Review" />
			<Column title="Done" />
		</div>
	);
}
