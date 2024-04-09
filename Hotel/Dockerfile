FROM node:20-alpine
FROM node:19.5.0-alpine

WORKDIR  /app

COPY . . 

RUN npm install
RUN npm run build

CMD [ "node", "server.js" ]



