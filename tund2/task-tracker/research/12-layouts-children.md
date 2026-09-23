Component composition.

- Suuremad komponendid pannakse kokku väiksematest

The children prop.

- children on kõik, mis on komponendi avava ja sulgeva tagi vahel

Reusing a layout without repeating its markup.

- Layout(nt PageSection) on ühes kohas, sisu antakse iga kord erinev children'ina

Demonstrate

```jsx
// src/components/PageSection.jsx
export function PageSection({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
```

```jsx
// kasutamine
<PageSection title="My tasks">
  <TaskList />
</PageSection>
```
