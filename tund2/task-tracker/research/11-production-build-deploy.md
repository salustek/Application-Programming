Development versus production.

- Development on arendamiseks (kiire, veateated), production on optimeeritud valmis versioon

npm run build, dist and npm run preview.

- npm run build teeb production buildi dist kausta, npm run preview näitab seda lokaalselt

Vite's base setting for a repository hosted on GitHub Pages.

- GitHub Pages on aadressil /repo-nimi/, seega vite.config.js-is base: "/repo-nimi/"

Deploying the build through GitHub Actions.

- Workflow teeb pushil buildi ja laeb dist kausta GitHub Pagesi üles

Why HashRouter is useful on GitHub Pages.

- GitHub Pages annaks /tasks/1 refreshimisel 404, HashRouteriga näeb server ainult index.html-i

Why GitHub Pages cannot run the future Express backend.

- GitHub Pages serveerib ainult staatilisi faile, Node.js seal ei jookse

Frontend environment variables are visible to users and cannot hold secrets.

- VITE_ muutujad pannakse buildi sisse ja kõik näevad neid brauseris

Where the frontend will get its backend URL during integration.

- .env failist, nt VITE_API_URL

Demonstrate

```js
// vite.config.js
export default defineConfig({
  plugins: [react()],
  base: '/test/',
});
```

```bash
npm run build
npm run preview
git add .
git commit -m "chore: configure github pages deployment"
git push
```

- Repo Settings -> Pages -> Source: GitHub Actions, workflow fail .github/workflows/ kaustas
