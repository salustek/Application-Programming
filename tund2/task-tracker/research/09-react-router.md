Client-side routing.

- Lehtede vahetus toimub brauseris ilma lehte uuesti laadimata

Installing React Router and wrapping the application in a router.

- npm install react-router-dom, main.jsx-is pannakse <App /> routeri sisse

Routes, Route, Link and NavLink.

- Routes: valib sobiva Route'i
- Route: seob path'i komponendiga
- Link: link ilma lehe uuesti laadimiseta
- NavLink: Link, mis teab, kas ta on aktiivne

BrowserRouter versus HashRouter.

- BrowserRouter: tavalised URL-id, vajab serveri seadistust
- HashRouter: URL-is # (/#/tasks/1), töötab ka staatilisel serveril nagu GitHub Pages

Dynamic routes and useParams.

- path="/tasks/:taskId", useParams() annab kätte taskId

URL parameters are strings.

- taskId on string, võrdlemiseks tuleb teha Number(taskId)

Handling unknown routes and unknown task IDs.

- path="*" näitab Page not found lehte, kui taski ei leita, näidatakse teadet

Demonstrate

```bash
npm install react-router-dom
```

```jsx
// src/main.jsx
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
);
```

```jsx
// src/App.jsx
import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

export default function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage tasks={tasks} />} />
        <Route path="/tasks/:taskId" element={<TaskDetailsPage tasks={tasks} />} />
        <Route path="*" element={<p>Page not found</p>} />
      </Routes>
    </>
  );
}
```

```jsx
// src/pages/TaskDetailsPage.jsx
import { useParams, Link } from 'react-router-dom';

export function TaskDetailsPage({ tasks }) {
  const { taskId } = useParams();
  const task = tasks.find((t) => t.id === Number(taskId));

  if (!task) return <p>Task not found</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.completed ? 'Completed' : 'Not completed'}</p>
      <Link to="/tasks">Back</Link>
    </div>
  );
}
```

- Tasks listis link detailidele: <Link to={`/tasks/${task.id}`}>{task.title}</Link>
