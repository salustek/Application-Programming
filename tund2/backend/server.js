import express from "express";
import * as store from "./tasks.js";

const app = express();
app.use(express.json());

function parseId(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    res.status(400).json({ error: "Task id must be an integer" });
    return null;
  }
  return id;
}

app.get("/api/tasks", (req, res) => {
  res.status(200).json(store.getAll());
});

app.get("/api/tasks/:id", (req, res) => {
  const id = parseId(req, res);
  if (id === null) return;

  const task = store.getById(id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  res.status(200).json(task);
});

app.post("/api/tasks", (req, res) => {
  const { title } = req.body ?? {};
  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "Title must be a non-empty string" });
  }

  const task = store.create({ title: title.trim() });
  res.status(201).json(task);
});

app.patch("/api/tasks/:id", (req, res) => {
  const id = parseId(req, res);
  if (id === null) return;

  const task = store.getById(id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  const { title, completed } = req.body ?? {};
  const changes = {};

  if (title !== undefined) {
    if (typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({ error: "Title must be a non-empty string" });
    }
    changes.title = title.trim();
  }

  if (completed !== undefined) {
    if (typeof completed !== "boolean") {
      return res.status(400).json({ error: "Completed must be a boolean" });
    }
    changes.completed = completed;
  }

  if (Object.keys(changes).length === 0) {
    return res.status(400).json({ error: "Provide at least a valid title or completed field" });
  }

  const updated = store.update(id, changes);
  res.status(200).json(updated);
});

app.delete("/api/tasks/:id", (req, res) => {
  const id = parseId(req, res);
  if (id === null) return;

  const deleted = store.remove(id);
  if (!deleted) return res.status(404).json({ error: "Task not found" });

  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Task tracker API listening on http://localhost:${PORT}`);
});
