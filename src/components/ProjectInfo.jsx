import React, { useState } from "react";
import "../styles/ProjectInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMediumM } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ProjectInfo = ({ projectsData }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const {
    ProjectName,
    role,
    description,
    Twitter,
    Discord,
    Telegram,
    Github,
    Medium,
    Whitepaper,
    Funding,
    Website,
    ImgSrc,
    Banner,
  } = projectsData;
  console.log(projectsData);
  const [websiteStyle, setWebsiteStyle] = useState({ display: "none" });
  function loadLinks() {
    if (Website) {
      setWebsiteStyle({});
    }
  }
  return (
  
    <section id="project-info">
      <div className="projectinfo-container ">
        <div className="info-container container">
          <div
            style={{
              backgroundImage: `url(${Banner})`,
            }}
            className="info-banner"
          ></div>
          <div className="info-project container">
            <div className="img-name">
              <img
                className="pfp-project"
                style={{ background: "black" }}
                src={ImgSrc}
                alt=""
                onLoad={loadLinks}
              />
              <h1 className="name-project">
                <h2>{ProjectName}</h2>
                <p>{role}</p>
              </h1>
            </div>
            <p className="description-project">{description}</p>
          </div>
        </div>
        <div className="link-box container">
          <h3>Links</h3>
          <div className="funding-info">
            <h1>
              Funding:{" "}
              <span style={{ color: "black", fontWeight: 100, fontSize: 24 }}>
                {Funding}
              </span>
            </h1>
          </div>
          <Link target="_blank" to={Twitter} className="twitter-link">
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
          <Link
            target="_blank"
            to={Website}
            style={websiteStyle}
            className="website-link"
          >
            Website
          </Link>
          <div className="otherlinks container">
            <Link target="_blank" className="somelinks" to={Discord}>
              <FontAwesomeIcon icon={faDiscord} />
            </Link>
            <Link target="_blank" className="somelinks" to={Telegram}>
              <FontAwesomeIcon icon={faTelegram} />
            </Link>
            <Link target="_blank" className="somelinks" to={Medium}>
              <FontAwesomeIcon icon={faMediumM} />
            </Link>
            <Link target="_blank" className="somelinks" to={Github}>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link target="_blank" className="somelinks" to={Whitepaper}>
              <FontAwesomeIcon icon={faFileLines} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
