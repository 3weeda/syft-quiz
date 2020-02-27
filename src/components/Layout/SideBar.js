import React from "react";
import campaigns from "../../assets/campaigns.jpg";

const items = ["Campaigns", "Creators", "Case studies", "Maecenas dictum"];

const SideBar = () => {
  return (
    <aside className="sidebar">
      <ul>
        {items.map(item => (
          <li key={item} className="sidebar__item" title={item}>
            <img src={campaigns} className="sidebar__img" alt={item} />
            <p className="sidebar__title">{item}</p>
          </li>
        ))}
        <li className="sidebar__add" title="Add new">+</li>
      </ul>
    </aside>
  );
};

export default SideBar;
