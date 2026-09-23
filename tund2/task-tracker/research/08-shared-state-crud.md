Lifting state to a common parent.

- Kui mitu komponenti vajavad samu andmeid, hoitakse state nende ühises vanemas (App)

Passing data down and callback functions down.

- Andmed ja funktsioonid antakse propsidena lapsele, laps kutsub nt onDelete(task.id) ja vanem muudab state'i

Why state arrays and objects must not be modified directly.

- React võrdleb viiteid. Kui muuta vana massiivi, jääb viide samaks ja React ei renderda uuesti

Adding with spread syntax.

- [...tasks, newTask] teeb uue massiivi koos uue taskiga

Updating with .map().

- tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t)

Deleting with .filter().

- tasks.filter((t) => t.id !== id)

Functional state updates.

- setTasks((prev) => ...) kasutab alati kõige värskemat state'i

Demonstrate

```jsx
// src/App.jsx
import { useState } from 'react';
import { TaskForm } from './components/TaskForm';
import { TaskCard } from './components/TaskCard';

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(title) {
    setTasks((prev) => {
      const nextId = Math.max(0, ...prev.map((t) => t.id)) + 1;
      return [...prev, { id: nextId, title, completed: false }];
    });
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
    <>
      <TaskForm onAddTask={handleAddTask} />
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
}
```

```jsx
// src/components/TaskCard.jsx
export function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="task-card">
      <h2>{task.title}</h2>
      <p>{task.completed ? 'Completed' : 'Not completed'}</p>
      <button onClick={() => onToggle(task.id)}>Toggle</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}
```
