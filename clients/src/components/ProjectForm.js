import React, { useState, useEffect } from "react";

const ProjectForm = ({ fetchProjects, currentProject, setCurrentProject }) => {
  const [name, setName] = useState("");
  const [client, setClient] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (currentProject) {
      setName(currentProject.name);
      setClient(currentProject.client);
      setDeadline(currentProject.deadline.split("T")[0]); // Format date for input
    } else {
      setName("");
      setClient("");
      setDeadline("");
    }
  }, [currentProject]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !client || !deadline) {
      alert("All fields are required");
      return;
    }
    try {
      const method = currentProject ? "PUT" : "POST";
      const url = currentProject
        ? `http://localhost:5000/api/projects/${currentProject._id}`
        : "http://localhost:5000/api/projects";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer hardcoded_token",
        },
        body: JSON.stringify({ name, client, deadline }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }

      await response.json();
      fetchProjects();
      setCurrentProject(null); // Reset current project
      setName("");
      setClient("");
      setDeadline("");
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Failed to save project. Check console for details.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Project Name"
        required
      />
      <input
        className="form-control"
        value={client}
        onChange={(e) => setClient(e.target.value)}
        placeholder="Client Name"
        required
      />
      <input
        className="form-control"
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />
      <button className="btn btn-primary" type="submit">
        {currentProject ? "Update Project" : "Add Project"}
      </button>
    </form>
  );
};

export default ProjectForm;
