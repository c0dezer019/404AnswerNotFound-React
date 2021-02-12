FROM node:15.8.0-alpine
WORKDIR /client
ENV PATH /client/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
COPY . .
RUN yarn install --silent
CMD ["yarn", "start"]