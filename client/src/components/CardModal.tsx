import React, { useCallback } from 'react';
import Tag from './Tag';
import { Label } from  './Models';

interface Details {
	title: string;
	content: string;
	labels: Label[];
	showCard: (state: boolean) => void;
}

const CardModal = ({ title, content, labels, showCard }: Details) => {
	const handleClick = useCallback(() => showCard(false), []);
	return (
		<div className="flex w-full h-full bg-dark-blue bg-opacity-75 fixed inset-0">
			<div className="p-4 w-1/3 m-auto bg-blue rounded relative">
				<div className="p-4 leading-4 absolute top-0 right-0 cursor-pointer text-white" onClick={handleClick}>X</div>
				<div>
					<h1 className="text- text-start text-xl text-light-blue">{title}</h1>
					<p className="text-white pb-3">{content}</p>
					<div className="flex flex-row">
						{labels.map((label) => (
							<Tag tag={label} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardModal;
