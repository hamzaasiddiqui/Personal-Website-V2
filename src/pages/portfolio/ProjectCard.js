import React from "react";

const ProjectCard = ( key, imgsrc, data ) => {
  return (
    <div key={key} className="po_item">
      <img src={imgsrc} alt="" />
      <div className="content">
        <p>{data.description}</p>
        <a href={data.link}>view project</a>
      </div>
    </div>
  );
};

export default ProjectCard;
