FROM node:10-alpine

WORKDIR /usr/local/app

COPY . .

ENV PORT 8000

RUN npm install \
    && npm run build \
    && npm cache clean --force

EXPOSE $PORT

CMD [ "npm", "run", "start" ]
