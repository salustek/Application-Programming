Controlled inputs: value and onChange.

- Inputi väärtus tuleb state'ist (value) ja iga muudatus uuendab state'i (onChange)

event.target.value.

- event.target on input, .value selle praegune tekst

Handling onSubmit.

- onSubmit pannakse <form>-ile, käivitub nii nupu kui Enteriga

event.preventDefault().

- Takistab vormi vaikekäitumist ehk lehe uuesti laadimist

Connecting a label to an input.

- label htmlFor="title" ja input id="title" peavad olema samad

Trimming input and rejecting empty titles.

- .trim() eemaldab tühikud algusest ja lõpust, kui tulemus on tühi, siis ei lisata

Displaying validation feedback.

- Veateade hoitakse state'is ja näidatakse: {error && <p>{error}</p>}

Demonstrate

```jsx
// src/components/TaskForm.jsx
import { useState } from 'react';

export function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      setError('Title is required');
      return;
    }

    onAddTask(trimmedTitle);
    setTitle('');
    setError('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task-title">Title</label>
      <input
        id="task-title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button type="submit">Add</button>
      {error && <p>{error}</p>}
    </form>
  );
}
```
