import React from "react";

const Graph = ({ profiles }) => {
  return (
    <div className="graph">
      <div className="graph__header">
        <p>Linked platforms</p>
        {profiles[4].accounts.map(({ platform }) => (
          <img
            src={require(`../../../assets/${platform.toLowerCase()}.svg`)}
            alt={`${platform} icon`}
            title={`Visit ${platform}`}
          />
        ))}
        <div className="graph__add" title="Add platform">
          +
        </div>
      </div>
      <div className="graph__chart"></div>
    </div>
  );
};

export default Graph;
