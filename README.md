# WOOF.
Boutique e-commerce indépendante d’accessoires personnalisés pour chiens, connectée à Printful.

## Architecture
- Next.js 14 / TypeScript
- Catalogue Printful lu directement via Catalog API
- Revalidation automatique toutes les heures
- Panier client interactif
- Architecture prévue pour Private Token, Orders API et webhooks
- Aucun secret dans Git

## Catalogue
Le storefront interroge l’API Printful, filtre la niche animaux et récupère les variantes réelles. Le catalogue public peut être lu sans token dans les limites Printful.

## Passage en vente réelle
Créer une boutique Manual order platform/API dans Printful, puis un Private Token avec les scopes nécessaires. Le token sera injecté côté serveur via PRINTFUL_TOKEN, jamais exposé au navigateur ni commité.

Le checkout reste volontairement verrouillé tant que le compte marchand et le paiement ne sont pas reliés : aucune fausse commande ne peut partir.

## Lancer
npm install
npm run dev
