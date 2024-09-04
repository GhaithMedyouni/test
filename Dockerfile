# Étape 1 : Utiliser une image Node.js officielle pour la construction
FROM node:18 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer toutes les dépendances, y compris les devDependencies
RUN npm install

# Copier le reste du code de l'application dans le conteneur
COPY . .

# Générer le client Prisma
RUN npx prisma generate

# Construire l'application Next.js
RUN npm run build

# Étape 2 : Utiliser une image Node.js alpine pour une image de production légère
FROM node:18-alpine AS production

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires depuis l'étape de build
COPY --from=build /app/package.json /app/package-lock.json /app/
COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public
COPY --from=build /app/prisma /app/prisma
COPY --from=build /app/node_modules /app/node_modules

# Installer uniquement les dépendances de production
RUN npm install --production

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Définir la commande par défaut pour démarrer l'application
CMD ["npm", "start"]
