# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# features
- [x] utilisation API strapi
- [ ] ajout dans l'API des technos utilisées
- [x] page d'accueil /home
- [x] projets /projects
- [x] projets/slug_du_projet
  - [x] nom
  - [x] description
  - [x] date de sortie créée automatiquement à la création du projet
  - [x] slug en fonction du titre
  - [ ] contenu en markdown transformés en html via showdown

- [x] hébergement sur vercel
- [x] hébergement de l'API pour la donner à vercel
- [ ] Bonus : la description n'est plus un markdown mais un array de components
