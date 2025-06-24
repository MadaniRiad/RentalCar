# 🚘 KSR Limousine – Plateforme de Location de Voitures de Luxe

Bienvenue sur le dépôt officiel de la plateforme web de **KSR Limousine**, une entreprise spécialisée dans la **location de véhicules de luxe à Paris, France**. Ce site permet aux clients de consulter les voitures disponibles, visualiser les plus populaires et effectuer une réservation en ligne de manière simple et rapide.

---

## ✨ Fonctionnalités principales

- 🔎 **Catalogue des véhicules** avec filtres
- 🌟 **Mise en avant des voitures les plus demandées**
- 📅 **Formulaire de réservation en ligne**
  - Nom, email, téléphone
  - Numéro de permis de conduire
  - Date de début et date de fin de location
- ✅ Traçabilité des réservations sans création de compte
- 🧩 Intégration d'une base de données PostgreSQL via Prisma
- 💎 Interface moderne et responsive

---

## 🛠️ Stack technique

- **Frontend** : [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) + [Tailwind CSS](https://tailwindcss.com/)
- **Backend ORM** : [Prisma](https://www.prisma.io/)
- **Base de données** : [PostgreSQL](https://www.postgresql.org/)
- **Déploiement** : [Vercel](https://vercel.com/) *(prévu)*

---

## 🚀 Mise en place locale

### 1. Cloner le projet

```
git clone https://github.com/ksr-limousine/ksr-limousine-app.git
cd car-rental/frontend/frontend_backup
```
### 2. Installer les dépendances
```
npm install
```
### 3. Configuration de l'environnement

Créer un fichier .env :
```
DATABASE_URL="postgresql://ksr_user:passe123@localhost:5432/ksr_limousine"
```
### 4. Initialiser la base de données
```
npx prisma migrate dev --name init
```
### 5. Lancer le serveur local
```
npm run dev
```
## 📁 Arborescence du projet

```
car-rental/
├── prisma/
│   └── schema.prisma
├── generated/
│   └── prisma/
├── frontend/
│   └── frontend_backup/
│       ├── app/
│       ├── pages/
│       └── ...
├── .env
├── package.json
└── README.md
```
## 📌 Prochaines améliorations

- Système de comptes clients
- Interface administrateur (gestion de flotte, réservations, etc.)
- Intégration paiement en ligne
- Notifications email de confirmation

## 🧑‍💼 À propos

Ce projet est développé pour l’entreprise KSR Limousine, spécialisée dans les services de location de voitures de luxe à Paris, France.

📍 Basée à Paris
📞 Contact : 07 60 06 81 45
🛡️ Licence

Ce projet est un logiciel privé. Toute reproduction ou distribution sans autorisation est interdite.
