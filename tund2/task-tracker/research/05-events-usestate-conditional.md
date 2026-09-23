onClick and event-handler functions.

- onClick-ile antakse funktsioon, mis käivitub klikil

The difference between passing and calling a function.

- onClick={handleClick} annab funktsiooni edasi, käivitub klikil
- onClick={handleClick()} käivitab funktsiooni kohe renderdamisel

State versus an ordinary variable.

- Tavaline muutuja lähtestub igal renderdusel ja ei uuenda ekraani
- State jääb meelde ja selle muutmine renderdab komponendi uuesti

useState and its setter.

- const [completed, setCompleted] = useState(false), väärtust muudetakse ainult setteriga

Updating based on previous state.

- Kui uus väärtus sõltub eelmisest: setCompleted((prev) => !prev)

Calling Hooks at the top level of a component.

- Hooke ei tohi kutsuda if-i, tsükli ega sisefunktsiooni sees, sest React tunneb need ära järjekorra järgi

Conditional rendering with if, a ternary expression and &&.

- if: enne returni valitakse, mida tagastada
- ternary: {completed ? "Completed" : "Not completed"}
- &&: {error && <p>{error}</p>}, näitab ainult kui tingimus on tõene



```jsx
// src/components/CompletionToggle.jsx
import { useState } from 'react';

export function CompletionToggle() {
  const [completed, setCompleted] = useState(false);

  function handleClick() {
    setCompleted((prev) => !prev);
  }

  return (
    <div>
      <p>{completed ? 'Completed' : 'Not completed'}</p>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}
```
