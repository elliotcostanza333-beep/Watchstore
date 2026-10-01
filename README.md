# Watchstore

Base e-commerce indépendante pour un catalogue de montres en dropshipping.

## Architecture
- Next.js / TypeScript
- Frontend responsive
- Couche catalogue indépendante du fournisseur
- Adaptateur WWT isolé dans lib/suppliers/wwt.ts
- Secrets uniquement via variables d'environnement

## État
La vitrine initiale est prête. Le catalogue WWT réel reste volontairement désactivé tant que les accès et le format du flux fournisseur ne sont pas confirmés. Aucun faux produit n'est injecté en production.

## Lancer
npm install
npm run dev
