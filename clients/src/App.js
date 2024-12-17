import React, { useEffect, useState } from "react";
import ProjectForm from "./components/ProjectForm";
import ProjectTable from "./components/ProjectTable";
import "./App.css"; 

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  const fetchProjects = async () => {
    const response = await fetch("http://localhost:5000/api/projects", {
      headers: { Authorization: "Bearer hardcoded_token" },
    });
    const data = await response.json();
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="container">
      <h1>Project Management Dashboard</h1>
      <ProjectForm
        fetchProjects={fetchProjects}
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
      />
      <ProjectTable
        projects={projects}
        fetchProjects={fetchProjects}
        setCurrentProject={setCurrentProject}
      />
    </div>
  );
};

export default App;
