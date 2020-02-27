import React from "react";
import Creator from "./Creator";

const BoardHeader = () => {
  return (
    <header className="boardheader">
      <Creator />
      <button className="boardheader__add" title="Add Creator">
        <span>+</span> Add Creator
      </button>
    </header>
  );
};

export default BoardHeader;
