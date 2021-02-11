FROM node:12-alpine
WORKDIR /client
COPY . .
RUN yarn install --production
CMD ["node", "src/index.tsx"]