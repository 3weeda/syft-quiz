import React from "react";
import BoardHeader from "./BoardHeader/BoardHeader";
import Chart from "./Chart/Chart";
import SocialTable from "./SocialTable/SocialTable";

const dashboard = () => {
  return (
    <main className="dashboard">
      <BoardHeader />
      <Chart />
      <SocialTable />
    </main>
  );
};

export default dashboard;
