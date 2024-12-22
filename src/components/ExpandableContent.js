import React, { useState } from "react";

function ExpandableContent({ title, children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h6 onClick={() => setExpanded(!expanded)}>{title}</h6>
      {expanded && <div>{children}</div>}
    </div>
  );
}

export default ExpandableContent;
