import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { CREATORS_QUERY } from "../../../queries/queries";

const Creator = () => {
  const { loading, error, data } = useQuery(CREATORS_QUERY);
  const [selected, setSelected] = useState({});
  const [open, setOpen] = useState(false);
  const [changed, setChanged] = useState(false);
  const handleOpen = creator => {
    if (!open) {
      setOpen(true);
      setChanged(true);
    } else {
      setSelected(creator);
      setOpen(false);
    }
  };
  useEffect(() => {
    // Set default creator
    if (data && !changed) setSelected(data.socialProfiles[0].profileData);
    console.log(`Currently selected: ${selected.name}`);
  }, [data, changed, selected]);

  if (loading)
    return (
      <div className="creator">
        <div className="creator__title">
          <p>Loading...</p>
        </div>
      </div>
    );
  if (error) return console.log(error);

  const dropDownItem = (data, index) => {
    const { name, picture } = data;
    return (
      <li
        key={name}
        onClick={() => handleOpen(data)}
        className={
          name === selected.name && open ? "creator__list--active" : undefined
        }
        style={{ paddingBottom: !open && "20px" }}
      >
        <img src={picture} alt="Creator avatar" />
        <p>{name}</p>
        {open && <div className="creator__list--underline"></div>}
        {index === 0 && <div className="arrow-down"></div>}
      </li>
    );
  };

  return (
    <div className="creator">
      <div className="creator__title">
        <p>Select Creator</p>
      </div>
      <ul className="creator__list">
        {open && data
          ? data.socialProfiles.map(({ profileData }) =>
              dropDownItem(profileData)
            )
          : dropDownItem(selected, 0)}
      </ul>
    </div>
  );
};

export default Creator;
