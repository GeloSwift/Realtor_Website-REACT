# 🚀 Projet React + TailwindCSS

Un projet frontend moderne utilisant **React** et **TailwindCSS** pour créer une interface rapide, responsive et maintenable.

---

## 📦 Prérequis

Avant de commencer, assurez-vous d’avoir installé sur votre machine :

- [Node.js](https://nodejs.org/) (>= 18.x recommandé)
- [npm](https://www.npmjs.com/) ou [pnpm](https://pnpm.io/) ou [yarn](https://yarnpkg.com/) (au choix)
- [Git](https://git-scm.com/)

---

## ⚙️ Création d’un projet React + TailwindCSS (si vous partez de zéro)

### 1. Créer un projet React avec Vite
```bash
pnpm create vite@latest mon-projet
cd mon-projet
```

### 2. Installer TailwindCSS
```bash
pnpm install tailwindcss @tailwindcss/vite
```

### 3. Configurer ```vite.config.js```
```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

---

## 🛠️ Installation du projet (si vous clonez ce repo)

### 1. Cloner le dépôt
``` bash
git clone https://github.com/GeloSwift/Realtor_Website-REACT.git
cd Realtor_Website-REACT
```

### 2. Installer les dépendances
``` bash
pnpm install
```

### 3. Lancer le projet en local
``` bash
pnpm run dev
```

👉 Le projet sera accessible à l’adresse : http://localhost:5173

---

## 📂 Structure du projet

---
```text
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## 🚀 Commandes utiles

- Lancer le projet en dev : ```pnpm run dev```

- Build pour la prod : ```pnpm run build```

- Prévisualiser le build : ```pnpm run preview```

- Lint (si configuré) : ```pnpm run lint```

---

## 🌍 Déploiement

Vous pouvez facilement déployer ce projet sur :

- [Vercel](https://vercel.com)
- [Github Pages](https://pages.github.com)

---

## 📚 Ressources utiles

- [Documentation React](https://react.dev)
- [Documentation Tailwindcss](https://tailwindcss.com/docs/installation/using-vite)
- [Documentation Vite](https://vite.dev)

---

## 👨‍💻 Auteur

Project réalisé par [GeloSwift](https://github.com/GeloSwift)

🔗 Démo en ligne : [Realtor Website](https://ton-lien.vercel.app)





