import React, { useCallback, useState } from "react";
import CardModal from "./CardModal";
import Tag from "./Tag";

export type Label = string;

interface Details {
  title: string;
  tags: Label[];
  date: string;
  description: string;
}

const Ticket = ({ title, tags, date, description }: Details) => {
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
          content={description}
          showCard={handleCloseCard}
        />
      )}
      <div
        className="box-border p-4 m-5 bg-blue rounded cursor-pointer"
        onClick={handleShowCard}
      >
        <h1 className="text- text-start text-xl text-light-blue">{title}</h1>
        <p className="text-green text-start pb-2">{date}</p>
        <div className="flex flex-row">
          {tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Ticket;
