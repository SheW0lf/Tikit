import React, { useCallback } from 'react';
import { Label } from './Ticket';

interface Details {
	title: string;
	content: string;
	labels: Label[];
	showCard: (state: boolean) => void;
}

const CardModal = ({ title, content, labels, showCard }: Details) => {
	const handleClick = useCallback(() => showCard(false), []);
	return (
		<div
			className="w-full h-full bg-dark-blue bg-opacity-75 fixed inset-0"
			onClick={handleClick}
		>
			<div className="p-12 w-1/3 bg-blue rounded">
				<div onClick={handleClick}>x</div>
				<div>
					<h1>{title}</h1>
					<h4>{labels}</h4>
					<p>{content}</p>
				</div>
			</div>
		</div>
	);
};

export default CardModal;
