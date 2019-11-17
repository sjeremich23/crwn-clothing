import React, { useState } from "react";
import "./directory.styles.scss";
import sections from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";

const Directory = () => {
  const [data] = useState(sections);

  return (
    <div className="directory-menu">
      {data.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
