FROM node:alpine

WORKDIR /front-end

COPY ./front-end/package*.json ./
RUN npm install

EXPOSE 3000

COPY ./front-end .

RUN npm run build

CMD ["npm", "run", "dev"]


