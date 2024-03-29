FROM node:lts-alpine3.16

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG GOOGLE_ANALYTICS_ID
ENV GOOGLE_ANALYTICS_ID $GOOGLE_ANALYTICS_ID
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
