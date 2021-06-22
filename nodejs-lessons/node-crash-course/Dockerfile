FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./src/package*.json .

RUN npm install

COPY ./src .

EXPOSE 3000

EXPOSE 8000


CMD ["cd", "src" "&&", "npm", "run", "dev"]