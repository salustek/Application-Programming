Passing data from parent to child.

- Vanem annab lapsele andmeid atribuutidena, nt <TaskCard task={task} />

Receiving props with destructuring.

- Propsid tulevad ühe objektina, destruktureerimisega võtad kohe vajaliku välja: function TaskCard({ task })

Passing strings, booleans and objects.

- string: title="Tekst", boolean: completed={true}, objekt: task={{ id: 1, title: "..." }}

Why props are read-only.

- Propsid kuuluvad vanemale, laps ei tohi neid muuta. Muidu muutuksid ka vanema andmed

Using different data with the same component.

- Sama komponenti saab kasutada mitu korda erinevate propsidega, muutub ainult sisu

Demonstrate

```jsx
// src/components/TaskCard.jsx
export function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h2>{task.title}</h2>
      <p>{task.completed ? 'Completed' : 'Not completed'}</p>
    </div>
  );
}
```

```jsx
// src/App.jsx
import { TaskCard } from './components/TaskCard';

const task1 = { id: 1, title: 'Learn React', completed: true };
const task2 = { id: 2, title: 'Build task tracker', completed: false };

export default function App() {
  return (
    <>
      <TaskCard task={task1} />
      <TaskCard task={task2} />
    </>
  );
}
```
