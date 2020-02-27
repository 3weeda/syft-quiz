import React, { useState } from "react";
import meter from "../../assets/meter.svg";
import Drawer from "./Drawer";

const items = ["", "Status", "Analytics", "Settings"];

const NavBar = () => {
  const [activeItem, setActive] = useState("");

  return (
    <nav className="menu">
      <Drawer />
      <ul>
        {items.map(item => (
          <li
            key={item}
            className={`menu__item ${activeItem === item &&
              "menu__item--active"}`}
            onClick={() => {
              setActive(item);
            }}
          >
            {item === "" ? <img src={meter} alt="meter" /> : item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
