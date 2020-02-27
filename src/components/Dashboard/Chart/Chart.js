import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { STATS_QUERY } from "../../../queries/queries";
import Platforms from "./Platforms";
import Graph from "./Graph";

const Chart = () => {
  const { loading, error, data } = useQuery(STATS_QUERY);
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    setProfiles(data);
    console.log(data);
  }, [profiles, data]);

  if (loading)
    return (
      <section className="chart">
        <p>Loading...</p>
      </section>
    );
  if (error) {
    console.log(error);
    return (
      <section className="chart">
        <p>{`Error: ${error}`}</p>
      </section>
    );
  }

  return (
    <section className="chart">
      {profiles && (
        <>
          <Platforms profiles={profiles.socialProfiles} />
          <Graph profiles={profiles.socialProfiles} />
        </>
      )}
    </section>
  );
};

export default Chart;
