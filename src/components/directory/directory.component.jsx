import React, { useState } from "react";
import "./directory.styles.scss";
import sections from "./directory.data";
import MenuItem from "../menu-item/menu-item.component";

const Directory = () => {
  const [data] = useState(sections);
  // console.log(section);

  return (
    <div className="directory-menu">
      {data.map(({ title, imageUrl, id, size }) => (
        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

export default Directory;
