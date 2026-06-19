# EduBurkina — prototype

Plateforme de cours en ligne (e-learning) pour le Burkina Faso : élèves, enseignants et parents, du primaire au lycée.

Frontend seul, sans backend : toutes les données (élèves, enseignants, cours, devoirs, badges) sont fictives et vivent dans `src/data/mockData.ts`. La connexion est simulée et stockée dans `localStorage`, aucune donnée n'est envoyée à un serveur.

## Stack

React 19 + TypeScript + Vite, React Router. CSS écrit à la main (pas de Tailwind), tokens de design dans `src/index.css`.

## Pages incluses ce soir

Accueil, catalogue de cours filtrable (niveau + matière), connexion/inscription (élève, enseignant, parent), tableau de bord élève, tableau de bord enseignant.

## Lancer en local

```bash
npm install
npm run dev
```

## Déployer sur Vercel

**Option A — via GitHub (recommandée pour itérer ensuite)**

1. Crée un repo GitHub et pousse ce dossier dedans (`git init`, `git add .`, `git commit -m "Premier jet EduBurkina"`, puis push).
2. Sur vercel.com → *Add New Project* → importe ce repo.
3. Vercel détecte Vite automatiquement : build command `npm run build`, output directory `dist`. Laisse tel quel et clique *Deploy*.
4. Chaque futur `git push` redéploie automatiquement — pratique pour corriger au fil de l'eau.

**Option B — déploiement instantané via la CLI (sans GitHub, pour ce soir)**

```bash
npm i -g vercel
vercel --prod
```

Suis les invites (connexion à ton compte Vercel, nom du projet). En une minute le lien de prod est généré.

## Pour la suite

Idées naturelles pour la prochaine itération : page de détail d'un cours (leçons, vidéo, quiz), espace parent dédié plus riche, vraie authentification + API quand le backend sera prêt, recherche dans le catalogue.
