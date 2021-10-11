import React from 'react';
import Column from './Column';
import initialData from './initial-data';
import { BoardState, ColumnData } from './Models';
import { DragDropContext, OnDragEndResponder } from 'react-beautiful-dnd';

export default class Board extends React.Component {
	readonly state: BoardState = initialData;

	onDragEnd: OnDragEndResponder = (result) => {
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

		const startColumn = this.state.columns.find(({ id }) => id === source.droppableId);
		const finishColumn = this.state.columns.find(({ id }) => id === destination.droppableId);

		if (startColumn === finishColumn) {
			const newTicketIds = Array.from(startColumn!.ticketIds!);
			newTicketIds.splice(source.index, 1);
			newTicketIds.splice(destination.index, 0, draggableId);

			const newStartColumn: ColumnData = {
				...startColumn!,
				ticketIds: newTicketIds
			};

			const newState: BoardState = {
				...this.state,
				columns: [
					...this.state.columns.map((col) => {
						return col.id !== newStartColumn?.id ? col : newStartColumn; 
					})
				]
			};

			this.setState(newState);
			return;
		}

		// If the card is being dragged into another column
		// handle the card drag separately

		const startTicketIds = Array.from(startColumn?.ticketIds!);
		startTicketIds.splice(source.index, 1);
		const newStartColumn: ColumnData = {
			...startColumn!,
			ticketIds: startTicketIds
		};

		const finishTicketIds = Array.from(finishColumn?.ticketIds!);
		finishTicketIds.splice(destination.index, 0, draggableId);
		const newFinishColumn: ColumnData = {
			...finishColumn!,
			ticketIds: finishTicketIds
		};

		const newBoardState = {
			...this.state,
			columns: [
				...this.state.columns.map((col) => {
					return col.id !== newStartColumn?.id ? 
							(col.id !== newFinishColumn?.id ? col: newFinishColumn) : newStartColumn;
				})
			]
		}

		this.setState(newBoardState);
	}

	render() {
		return (
			<DragDropContext 
				onDragEnd={this.onDragEnd}
			>
				<div className="grid grid-cols-4 bg-blue gap-6 m-10 p-6 min-h-screen">
					{this.state.columns.map(column => {
						const tickets = column.ticketIds?.map((ticketId) => {
							return this.state.tickets.find(({ id }) => id === ticketId)!;
						})

						return <Column key={column.id} id={column.id} title={column.title} tickets={tickets} />
					})}
				</div>
			</DragDropContext>
		);
	}
	
}
