FROM node:18.16.1-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package.json .

RUN pnpm install

COPY . .

CMD ["pnpm", "start"]