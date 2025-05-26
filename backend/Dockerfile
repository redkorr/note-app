FROM node:22-alpine AS builder

WORKDIR /src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run prisma

RUN npm run swagger

EXPOSE 3000

RUN npm run build



CMD [ "node", "dist/index.js" ]