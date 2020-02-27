import React from "react";

const BurgerMenu = ({ onClick, open }) => {
  return (
    <div
      className="burgermenu"
      title={open ? "Close menu" : "Open menu"}
      onClick={onClick}
      style={{height: open && '50px'}}
    >
      {Array.from(Array(3), (e, i) => {
        return <div key={i} className={`burgermenu__line ${open && "burgermenu__line--open"}`}></div>;
      })}
    </div>
  );
};

export default BurgerMenu;