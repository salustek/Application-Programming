What is React?

- React on JavaScripti teek kasutajaliideste ehitamiseks. React uuendab brauseris antud andmete põhjal ainult muutunud osad.

What is a component?

- Komponent on korduvkasutatav tükk (funktsioon)

What is Vite?

- Vite on arendustööriist. Arenduses käivitab ta kiire arendusserveri, mis teisendab jsx-i brauserile arusaadavaks.

What roles do Node.js and npm play when developing a React application?

- Node.js on JS käituskeskkond väljaspool brauserit, mille peal jookseb Vite otse sinu arvutis.

Explain package.json, node_modules, index.html, src/main.jsx and src/App.jsx.

- package.json: selgitabb, mis projektiga tegu on ning millest sõltub(dependencies). npm loeb package.json-i
- node_modules: kaust kuhu npm install paigaldab kõik paketid koos nende sõltuvustega
- index.html: rakenduse sisenemispunkt
- src/main.jsx: javascripti sisenemispunkt
- src/App.jsx: juurkomponent, kus asub rakenduse nähtav sisu. index.html -> main.jsx -> App.jsx -> ekraan

Explain the difference between installing dependencies and starting the development server.

- npm install paigaldab vajalikud sõltuvused. seda tehakse pärast projekti loomist või kui sõltuvused muutuvad
- npm run dev käivitab arendusserveri. See kasutab paigaldatud pakette ja jääb tööle.

Demonstrate

```bash
npm create vite@latest task-tracker -- --template react
cd task-tracker
npm install
npm run dev
```

```jsx
// src/App.jsx
function App() {
  return <h1>Task Tracker</h1>;
}

export default App;
```
