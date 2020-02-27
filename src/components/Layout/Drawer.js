import React, { useState, useEffect, useRef } from "react";
import BurgerMenu from "./BurgerMenu";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close drawer menu onclick outside it
  function backdropClick(e) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", backdropClick);
    return () => {
      document.removeEventListener("mousedown", backdropClick);
    };
  });

  return (
    <div ref={wrapperRef}>
      <BurgerMenu onClick={() => setOpen(!open)} open={open} />
      <div className="drawer" style={{ display: open ? "block" : "none" }}>
        <ul>
          {Array.from(Array(5), (e, i) => {
            return (
              <li
                key={i}
                className="drawer__item"
                onClick={() => setOpen(false)}
              >
                Menu item
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
