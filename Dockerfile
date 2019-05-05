FROM node:12-alpine

WORKDIR /usr/src/war-bot

COPY package*.json ./

RUN npm ci --only=production

COPY LICENSE .

COPY README.md .

COPY ./bot ./bot

ENV PORT 3000

EXPOSE $PORT

CMD ["node", "."]
