export type Label = "bug" | "ticket";

export interface TicketData {
    id: string;
    title: string;
    tags: Label[];
    date: string;
}

export interface TicketProps extends TicketData {
    index: number
}

export interface ColumnProps {
    id: string;
    title: string;
	tickets: TicketData[]
}

export interface ColumnData {
    id: string;
    title: string;
	ticketIds: string[]
}

export interface BoardState {
    tickets: TicketData[];
    columns: ColumnData[];
}