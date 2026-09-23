let tasks = [
  { id: 1, title: "Learn Express", completed: false },
  { id: 2, title: "Build a REST API", completed: false },
];
let nextId = 3;

export function getAll() {
  return tasks;
}

export function getById(id) {
  return tasks.find((t) => t.id === id);
}

export function create({ title }) {
  const task = { id: nextId++, title, completed: false };
  tasks.push(task);
  return task;
}

export function update(id, changes) {
  const task = getById(id);
  if (!task) return null;
  Object.assign(task, changes);
  return task;
}

export function remove(id) {
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}
