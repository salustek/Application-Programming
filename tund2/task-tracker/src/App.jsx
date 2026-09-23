import { useState, useRef } from "react";
import TaskForm from "./tasks/TaskForm";
import TaskList from "./tasks/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const nextId = useRef(1);

  function handleAdd(text) {
    const newTask = { id: nextId.current++, text, completed: false };
    setTasks((prev) => [...prev, newTask]);
  }

  function handleToggle(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }

  function handleDelete(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div><h1>Tasks</h1>
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
}