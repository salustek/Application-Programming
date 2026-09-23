git status, git add, git commit and git push.

- git status: mis on muutunud, lavastatud või jälgimata
- git add: lisab kõik muudatused
- git commit: salvestab muudatused
- git push: saadab commitid githubi

Why node_modules should not be committed.

- Selle kausta loob npm install automaatselt package.json ja package-lock.json põhjal, niiet seda saab alati uuesti tekitada. Kuna kaust on väga suur, siis see paisutab asjatult repot

Why package-lock.json should be committed.

- package-lock.json salvestab iga paketi ja sõltuvuse versiooni. Selle järgi saavad kõik teised kasutajad samad sõltuvused.

Angular-style commit messages: type: description.

- Kirjeldus on lühike, väikese algustähega, käskivas kõneviisis ja ilma lõpupunktita

Common types: feat, fix, docs, style, refactor and chore.

- feat: lisab uue funktsionaalsuse
- fix: parandab vea
- docs: tähistab ainult dokumentatsiooni muudatusi
- style: tähistab vormindust, mis loogikat ei muuda
- refactor: muudab koodi struktuuri käitumist muutmata
- chore: tähistab tööriistu, konfiguratsiooni ja sõltuvuste uuendamist

Installing the Prettier VS Code extension and Prettier in the project.
Setting Prettier as the default formatter and enabling format on save.

- npm install --save-dev --save-exact prettier
- settings -> editor:format on save / editor: default formatter

.prettierrc and .prettierignore.

- prettierrc saad ise määrata vormindusreegleid
- prettierignore määrab failid, mida prettier peaks ignoreerima

The difference between Prettier formatting and ESLint checks.

- Prettier formatter, huvitab ainult koodi välimus
- ESLint on linter, kontrollib koodi kvaliteeti ja tõenäolisi vigu

Demonstrate

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2
}
```

```json
// package.json
"scripts": {
  "format": "prettier --write .",
  "format:check": "prettier --check ."
}
```

```bash
npm run format
git add .
git commit -m "style: format task tracker components"
git push
```
