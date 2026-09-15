# Uledet

Application React construite avec Vite.

## Available Scripts

Dans le dossier du projet, vous pouvez lancer :

### `npm start`

Démarre le serveur de développement Vite.

Ouvrez l'URL affichée par Vite dans le navigateur.

### `npm run build`

Construit l'application pour la production dans le dossier `dist`.

### `npm run preview`

Sert localement le build de production.

### `npm run deploy`

Construit puis publie le contenu de `dist` avec `gh-pages`.

## Security

Le projet a ete migre de Create React App vers Vite afin de retirer les dependances transitives vulnerables de `react-scripts`.

Verification :

```sh
npm audit --audit-level=low
```
