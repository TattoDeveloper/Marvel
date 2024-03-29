FROM node:18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --omit=dev

COPY . .

RUN yarn build

CMD ["yarn", "start"]