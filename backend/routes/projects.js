const express = require("express");
const Project = require("../models/Project");
const auth = require("../middleware/auth");

const router = express.Router();

router.use(auth);

// POST: Create a new project
router.post("/", async (req, res) => {
  const { name, client, deadline } = req.body;
  const project = new Project({ name, client, deadline });
  await project.save();
  res.status(201).json(project);
});

// GET: Retrieve all projects
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// PUT: Update a project by ID
router.put("/:id", async (req, res) => {
  const { name, client, deadline } = req.body;
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    { name, client, deadline },
    { new: true }
  );
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  res.json(project);
});

// DELETE: Delete a project by ID
router.delete("/:id", async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  res.status(204).send();
});

module.exports = router;
