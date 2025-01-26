import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Form from "./components/Form";
import ProjectInfo from "./components/ProjectInfo";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const projectsData = require("./projects.json");

function App() {
  const [navColor, setNavColor] = useState("black");
  const [subproButton, setNavButton] = useState({});
  return (
    <>
      <BrowserRouter>
        <Navbar
          navColor={navColor}
          setNavColor={setNavColor}
          subbtn={subproButton}
          setSubBtn={setNavButton}
        />
        <Routes>
          <Route path="*" element={<NotFound />} />

          <Route
            path="/"
            element={
              <>
                <Header />
                <Projects projectsData={projectsData} />
              </>
            }
          />
          <Route
            path="/Form"
            element={
              <>
                <Form />
              </>
            }
          />
          {projectsData.map((project) => {
            const projectNameLink = project.ProjectName.split(" ").join("");

            return (
              <Route
                path={projectNameLink}
                element={<ProjectInfo projectsData={project} />}
              />
            );
          })}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
