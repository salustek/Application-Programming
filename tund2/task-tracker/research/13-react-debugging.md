Browser console errors and React warnings.

- Console (F12) näitab JS vigu ja Reacti hoiatusi, nt puuduv key listis. Veateates on fail ja rida, kust viga tuli

Inspecting props and state with React Developer Tools.

- Brauseri laiendus, Components vaates saab valida komponendi ja näha selle props'e ja state'i reaalajas

What a component test checks.

- Kontrollib, kas komponent renderdab õige sisu ja reageerib kasutaja tegevusele õigesti

Testing behaviour rather than styling or internal variable names.

- Test kontrollib seda, mida kasutaja näeb ja teeb (tekst, nupu klikk), mitte CSS-i ega muutujate nimesid. Siis ei lähe test katki, kui koodi ümber kirjutada

Demonstrate

```jsx
// src/components/TaskCard.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { TaskCard } from './TaskCard';

const task = { id: 1, title: 'Learn React', completed: false };

describe('TaskCard', () => {
  it('shows the task title', () => {
    render(<TaskCard task={task} onToggle={() => {}} onDelete={() => {}} />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
  });

  it('calls onToggle with the task id', async () => {
    const onToggle = vi.fn();
    render(<TaskCard task={task} onToggle={onToggle} onDelete={() => {}} />);
    await userEvent.click(screen.getByRole('button', { name: 'Toggle' }));
    expect(onToggle).toHaveBeenCalledWith(1);
  });
});
```

```bash
npm test
```

- Kontroll: kui TaskCard-is muuta onClick={() => onToggle(task.id)} näiteks onClick={() => {}}, peab teine test failima
