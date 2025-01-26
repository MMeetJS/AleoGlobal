import React from "react";
import { Link } from "react-router-dom";

const ProjectLayout = ({ imgSrc, projectName, projectType, style }) => {
  const projectNameLink = projectName.split(" ").join("");

  return (
    <div style={style} className="project-layout">
      <div className="project-container container">
        <img src={imgSrc} alt="" />
        <h3>
          <Link
            className="h3link"
            style={{ textDecoration: "none" }}
            to={projectNameLink}
          >
            {" "}
            {projectName}
          </Link>{" "}
          <p>{projectType}</p>
        </h3>
      </div>
    </div>
  );
};

export default ProjectLayout;
