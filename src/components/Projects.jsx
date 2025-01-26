import React, { useState } from "react";
import "../styles/Projects.css";
import ProjectLayout from "./ProjectLayout";

const Projects = ({ projectsData }) => {
  const [defi, setdefi] = useState();
  const [game, setgame] = useState();
  const [launchpad, setlaunchpad] = useState();
  const [meme, setmeme] = useState();
  const [nft, setnft] = useState();
  const [nftMarket, setnftMarket] = useState();
  const [wallet, setwallet] = useState();
  const [infrastructure, setinfrastructure] = useState();
  const [rwa, setrwa] = useState();



  const [navall, setnavall] = useState("underline");
  const [navdefi, setnavdefi] = useState();
  const [navgame, setnavgame] = useState();
  const [navlaunchpad, setnavlaunchpad] = useState();
  const [navmeme, setnavmeme] = useState();
  const [navnft, setnavnft] = useState();
  const [navnftMarket, setnavnftMarket] = useState();
  const [navwallet, setnavwallet] = useState();
  const [navinfrastructure, setnavinfrastructure] = useState();




  function filter(f) {
    if (f === "all") {
      setdefi();
      setgame();
      setlaunchpad();
      setmeme();
      setnft();
      setnftMarket();
      setwallet();
      setinfrastructure()
 

    } else {
      setdefi({ display: "none" });
      setgame({ display: "none" });
      setlaunchpad({ display: "none" });
      setmeme({ display: "none" });
      setnft({ display: "none" });
      setnftMarket({ display: "none" });
      setwallet({ display: "none" });
      setinfrastructure({ display: "none" })
      f();
    }
    setnavall();
    setnavdefi();
    setnavgame();
    setnavlaunchpad();
    setnavmeme();
    setnavnft();
    setnavnftMarket();
    setnavwallet();
    setnavinfrastructure()

  }

  return (
    <section id="projects">
      <div className="projects container">
        <h2>Aleo Global</h2>
        <div className="projects-nav container">
          <div
            className={`project-link ${navall}`}
            onClick={function () {
              filter("all");
              setnavall("underline");
            }}
          >
            All
          </div>
          <div
            className={`project-link ${navdefi}`}
            onClick={function () {
              filter(setdefi);
              setnavdefi("underline");
            }}
          >
            Defi
          </div>
          <div
            className={`project-link ${navgame}`}
            onClick={function () {
              filter(setgame);
              setnavgame("underline");
            }}
          >
            Game
          </div>
          <div
            className={`project-link ${navlaunchpad}`}
            onClick={function () {
              filter(setlaunchpad);
              setnavlaunchpad("underline");
            }}
          >
            Launchpad
          </div>
          <div
            className={`project-link ${navmeme}`}
            onClick={function () {
              filter(setmeme);
              setnavmeme("underline");
            }}
          >
            Meme
          </div>
          <div
            className={`project-link ${navnft}`}
            onClick={function () {
              filter(setnft);
              setnavnft("underline");
            }}
          >
            Nft
          </div>
          <div
            className={`project-link ${navnftMarket}`}
            onClick={function () {
              filter(setnftMarket);
              setnavnftMarket("underline");
            }}
          >
            Nft Market
          </div>
          <div
            className={`project-link ${navwallet}`}
            onClick={function () {
              filter(setwallet);
              setnavwallet("underline");
            }}
          >
            Wallet
          </div>
          <div
            className={`project-link ${navinfrastructure}`}
            onClick={function () {
              filter(setinfrastructure);
              setnavinfrastructure("underline");
            }}
          >
            Infra
          </div>
        </div>
        <div className="projects-view">
          {projectsData.map((project) => {
            function roleGiver() {
              if (project.role.toLowerCase() === "defi") return defi;
              else if (project.role.toLowerCase() === "game") return game;
              else if (project.role.toLowerCase() === "launchpad")
                return launchpad;
              else if (project.role.toLowerCase() === "meme") return meme;
              else if (project.role.toLowerCase() === "nft") return nft;
              else if (project.role.toLowerCase() === "nft market")
                return nftMarket;
              else if (project.role.toLowerCase() === "wallet") return wallet;
              else if (project.role.toLowerCase() === "infrastructure") return infrastructure;

            }
            return (
              <ProjectLayout
                style={roleGiver()}
                imgSrc={project.ImgSrc}
                projectName={project.ProjectName}
                projectType={project.role}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
