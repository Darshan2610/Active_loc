import React from "react";

const ProjectTable = ({ projects, fetchProjects, setCurrentProject }) => {
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/projects/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer hardcoded_token",
      },
    });
    fetchProjects();
  };

  const handleEdit = (project) => {
    setCurrentProject(project);
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Client Name</th>
          <th>Deadline</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <tr key={project._id}>
            <td>{project.name}</td>
            <td>{project.client}</td>
            <td>{new Date(project.deadline).toLocaleDateString()}</td>
            <td>
              <button
                className="btn btn-warning "
                style={{ marginRight: "10px" }}
                onClick={() => handleEdit(project)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(project._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTable;
