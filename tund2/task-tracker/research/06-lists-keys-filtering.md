Rendering task objects with .map().

- .map() teeb igast taskist JSX-elemendi: tasks.map((task) => <TaskCard key={task.id} task={task} />)

Why React needs keys.

- Key järgi saab React aru, milline element on milline, kui list muutub

Why stable task IDs are suitable keys.

- ID on unikaalne ja ei muutu. Indeks muutub filtreerimisel ja kustutamisel

Filtering with .filter().

- .filter() tagastab uue massiivi ainult sobivate elementidega, originaal jääb samaks

Keeping the filter choice in state.

- Valitud filter ("all", "completed", "incomplete") on state'is, et vahetus renderdaks listi uuesti

Calculating a filtered list from existing state instead of storing another copy of the list.

- Filtreeritud list arvutatakse igal renderdusel tasks + filter põhjal, eraldi koopia võiks sünkroonist välja minna

Demonstrate

```jsx
// src/components/TaskList.jsx
import { useState } from 'react';
import { TaskCard } from './TaskCard';

export function TaskList({ tasks }) {
  const [filter, setFilter] = useState('all');

  const visibleTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('incomplete')}>Incomplete</button>

      {visibleTasks.length === 0 && <p>No tasks found</p>}
      {visibleTasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
```
