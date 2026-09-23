What an API is.

- Liides, mille kaudu programm küsib teiselt andmeid, nt frontend serverilt JSON-it

Fetching JSON with fetch and async/await.

- const response = await fetch(url), const data = await response.json()

Checking response.ok.

- fetch ei viska 404 või 500 puhul viga, seega tuleb response.ok ise kontrollida

Using useEffect to synchronise with an external data source.

- useEffect käivitab koodi pärast renderdust, nt andmete laadimiseks

Effect dependencies and cleanup.

- [] tähendab, et effect käivitub ainult korra
- Cleanup (return () => ...) takistab vanal päringul UI-d uuendamast

Avoiding repeated requests caused by incorrect dependencies.

- Vale või puuduv dependency massiiv teeb igal renderdusel uue päringu

Loading, error, success and empty states.

- Näidatakse vastavalt: "Loading...", veateade, taskid või "No tasks found"

Keeping data-loading code in a service file.

- fetch on src/services/taskApi.js-is, komponent kutsub ainult getTasks()
- Järgmises tunnis muutub ainult service, mis hakkab Node.js API-st küsima

Demonstrate

```js
// src/services/taskApi.js
export async function getTasks() {
  const response = await fetch(`${import.meta.env.BASE_URL}tasks.json`);
  if (!response.ok) {
    throw new Error('Failed to load tasks');
  }
  return response.json();
}
```

```jsx
// src/App.jsx
const [tasks, setTasks] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState('');

useEffect(() => {
  let ignore = false;

  getTasks()
    .then((data) => {
      if (!ignore) setTasks(data);
    })
    .catch((err) => {
      if (!ignore) setError(err.message);
    })
    .finally(() => {
      if (!ignore) setLoading(false);
    });

  return () => {
    ignore = true;
  };
}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>{error}</p>;
```
