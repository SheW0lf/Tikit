import React, { useCallback, useState } from "react";
import CardModal from "./CardModal";
import Tag from "./Tag";
import { TicketProps } from './Models';
import { Draggable } from "react-beautiful-dnd";

const Ticket = ({ id, title, tags, date, index }: TicketProps) => {
  const [showCard, setShowCard] = useState(false);

  const handleShowCard = useCallback(() => {
    setShowCard(true);
  }, []);

  const handleCloseCard = useCallback(() => {
    setShowCard(false);
  }, []);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => {
        const ticketCardStyleClasses = "box-border p-4 m-2 bg-blue rounded cursor-pointer";

        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {showCard && (
              <CardModal
                title={title}
                labels={tags}
                content={"some content"}
                showCard={handleCloseCard}
              />
            )}
            <div
              className={snapshot.isDragging ? `${ticketCardStyleClasses} shadow-outline` : ticketCardStyleClasses}
              onClick={handleShowCard}
            >
              <h1 className="text- text-start text-xl text-light-blue">{title}</h1>
              <p className="text-green text-start pb-2">{date}</p>
              <div className="flex flex-row">
                {tags.map((tag, index) => (
                  <Tag key={index} tag={tag} />
                ))}
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Ticket;
