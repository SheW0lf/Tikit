import React, { useCallback, useState } from 'react';
import CardModal from './CardModal';

export type Label = 'bug' | 'ticket';

interface Details {
	title: string;
	tags: Label[];
	date: string;
}

const Ticket = ({ title, tags, date }: Details) => {
	const [showCard, setShowCard] = useState(false);

	const handleShowCard = useCallback(() => {
		setShowCard(true);
	}, []);

	const handleCloseCard = useCallback(() => {
		setShowCard(false);
	}, []);

	return (
		<>
			{showCard && (
				<CardModal
					title={title}
					labels={tags}
					content={'some content'}
					showCard={handleCloseCard}
				/>
			)}
			<div
				className="box-border p-4 m-5 bg-blue rounded cursor-pointer"
				onClick={handleShowCard}
			>
				<h1 className="text- text-start text-xl text-light-blue">
					{title}
				</h1>
				<p className="text-green text-start pb-2">{date}</p>
				<div className="flex flex-row">
					{tags.map((tag) => (
						<p className="text-pink text-start padding pr-2 py-1">
							{tag}
						</p>
					))}
				</div>
			</div>
		</>
	);
};

export default Ticket;
