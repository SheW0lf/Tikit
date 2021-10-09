import { features } from "process";
import React, { useState, useEffect } from "react";

const Tag = ({ tag }: any) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (tag === "bug") {
      setColor("danger");
    } else if (tag === "feature") {
      setColor("info");
    } else if (tag === "ticket") {
      setColor("success");
    }
  }, [tag]);
  return (
    <div>
      <span className={`Label mr-1 Label--${color}`}>{tag}</span>
    </div>
  );
};

export default Tag;
