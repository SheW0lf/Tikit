import { BoardState } from  './Models';

const initialData: BoardState = 
{
    tickets: [
        {
            id: 'issue-1',
            title: 'Create a Component',
            tags: ['bug', 'ticket'],
            date: '10/10/2021',
        },
        {
            id: 'issue-2',
            title: 'Style the Component',
            tags: ['bug', 'ticket'],
            date: '10/10/2021',
        },
        {
            id: 'issue-3',
            title: 'Create another Component',
            tags: ['bug', 'ticket'],
            date: '10/10/2021',
        },
        {
            id: 'issue-4',
            title: 'Style another Component',
            tags: ['bug', 'ticket'],
            date: '10/10/2021',
        }
    ],
    columns: [
        {
            id: "todo",
            title: "To Do",
            ticketIds: [ 'issue-1', 'issue-2', 'issue-3', 'issue-4' ]
        },
        {
            id: "in-progress",
            title: "In Progress",
            ticketIds: [ ]
        },
        {
            id: "needs-review",
            title: "Needs Review",
            ticketIds: [ ]
        },
        {
            id: "done",
            title: "Done",
            ticketIds: [ ]
        }
    ]
}

export default initialData;
