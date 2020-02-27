import React, { useState } from "react";
import Dropdown from "react-dropdown";
import commaNumber from "comma-number";

const icons = ["All", "Twitter", "Instagram", "Facebook", "Youtube"];

const Platforms = ({ profiles }) => {
  const [selected, setSelected] = useState("All");

  const choose = option => {
    console.log("You selected ", option.label);
    setSelected(option.label);
  };

  const getAudience = platform => {
    let audience;
    switch (platform) {
      case "Facebook":
        audience = "likes";
        break;
      case "Youtube":
        audience = "subscribers";
        break;
      default:
        audience = "followers";
    }
    console.log(audience);
    return audience;
  };

  return (
    <div className="platforms">
      <ul className="platforms__items">
        {profiles[4].accounts.map(account => {
          const { platform } = account;
          return (
            <li>
              <img
                src={require(`../../../assets/${platform.toLowerCase()}.svg`)}
                alt={`${platform} icon`}
              />
              <p>
                {commaNumber(
                  account[platform.toLowerCase()].overview[
                    getAudience(platform)
                  ]
                )}
              </p>
            </li>
          );
        })}
      </ul>
      <p className="platforms__text">Select Platform</p>
      <div className="platforms__select">
        <Dropdown
          options={icons}
          onChange={choose}
          value={selected}
          className="platforms__select--list"
          menuClassName="platforms__select--menu"
          arrowClassName="platforms__select--arrow"
        />
      </div>
    </div>
  );
};

export default Platforms;
