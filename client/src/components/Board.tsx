import React, { useState } from 'react';
import Column from './Column';
import initialData from './initial-data';
import { BoardState, ColumnData, TicketData } from './Models';
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd';

export default function Board() {
	const tickets: TicketData[] = initialData.tickets;
	const [columns, setColumns] = useState(initialData.columns);

	const onDragEnd: OnDragEndResponder = (result) => {
		const { destination, source, draggableId } = result;
	
		if (!destination) {
			return;
		}
	
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}
	
		const startColumn = columns.find(({ id }) => id === source.droppableId);
		const finishColumn = columns.find(({ id }) => id === destination.droppableId);
	
		if (startColumn === finishColumn) {
			const newTicketIds = Array.from(sanitizedValue(startColumn).ticketIds || []); // || [] has been added to handle null initializations
			newTicketIds.splice(source.index, 1);
			newTicketIds.splice(destination.index, 0, draggableId);
	
			const newStartColumn: ColumnData = {
				...sanitizedValue(startColumn),
				ticketIds: newTicketIds
			};
			const newColumnsState =  [
				...columns.map((col) => {
					return col.id !== newStartColumn?.id ? col : newStartColumn; 
				})
			];
			setColumns(newColumnsState);

			return;
		}
	
		// If the card is being dragged into another column
		// handle the card drag separately
	
		const startTicketIds = Array.from(startColumn?.ticketIds || []);
		startTicketIds.splice(source.index, 1);
		const newStartColumn: ColumnData = {
			...sanitizedValue(startColumn),
			ticketIds: startTicketIds
		};
	
		const finishTicketIds = Array.from(finishColumn?.ticketIds || []);
		finishTicketIds.splice(destination.index, 0, draggableId);
		const newFinishColumn: ColumnData = {
			...sanitizedValue(finishColumn),
			ticketIds: finishTicketIds
		};

		const newColumnState = [
			...columns.map((col) => {
				return col.id !== newStartColumn?.id ? 
						(col.id !== newFinishColumn?.id ? col: newFinishColumn) : newStartColumn;
			})
		];
		setColumns(newColumnState);
	}

	/**
	 * This function is used as a utility to ensure compiler does not complain in the cases
	 * where a variable for a fact would be present and the compiler complains it could be "undefined"
	 * due to the signature of certain functions like Array.prototype.find
	 * 
	 * @param data Any data that needs to be checked for null or undefined
	 * @returns Returns received data
	 */
	function sanitizedValue<T>(data: T | null | undefined): T {
		if (data === undefined || data === null) {
			throw new TypeError(`${typeof data} should be non null`);
		}

		return data;
	}

	return (
		<DragDropContext 
			onDragEnd={onDragEnd}
		>
			<div className="grid grid-cols-4 bg-blue gap-6 m-10 p-6 min-h-screen">
				{columns.map(column => {
					const columnTickets: TicketData[] = [];
					column.ticketIds.forEach((ticketId) => {
						const foundTicket = tickets.find(({ id }) => id === ticketId);
						if (foundTicket) {
							columnTickets.push(foundTicket);
						}
					});

					return <Column key={column.id} id={column.id} title={column.title} tickets={columnTickets} />
				})}
			</div>
		</DragDropContext>
	);

}
