JSX versus HTML.

- JSX näeb välja nagu html, aga tegelikult on JavaScripti süntaks. Vite teisendab selle tavaliseks JavaScriptiks
- näide: html: class="..." aga jsx: className="..."

Capitalised component names.

- Väike täht tähendab HTML-i elementi, suur täht sinu enda komponenti

Closing tags and using a single parent or Fragment.

- Kõik tagid peavad olema suletud (/). Komponent peab tagastama ühe juurelemendi seega ei saaa kahte elementi korraga tagastada, lahendus (div)

JavaScript expressions inside {}.

- Loogsulgude sisse võib panna iga avaldise, mis annab väärtuse

className and importing CSS.

```jsx
/_button.css_/
.btn {
    padding: 8px 16px;
    background: #0072ce;
    color: white;
}
...

/_button.jsx_/
import "./Button.css";
function Button() {
    return <button className="btn">Osta</button>
}
```

Exporting and importing components.

```jsx
/_Header.jsx_/;
export default function Header() {
  return <h1>Pood</h1>;
}

/_App.jsx_/;
import Header from './Header';
```

Demonstrate

```jsx
// src/components/Header.jsx
export default function Header() {
  return <h1>Task Tracker</h1>;
}
```

```jsx
// src/components/TaskCard.jsx
import './TaskCard.css';

export default function TaskCard() {
  return <div className="task-card">Learn React</div>;
}
```

```css
/* src/components/TaskCard.css */
.task-card {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
```

```jsx
// src/App.jsx
import Header from './components/Header';
import TaskCard from './components/TaskCard';

export default function App() {
  return (
    <>
      <Header />
      <TaskCard />
    </>
  );
}
```
