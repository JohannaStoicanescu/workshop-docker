FROM node:alpine

WORKDIR /back-end

COPY ./back-end/package.json ./

RUN npm install

EXPOSE 4000

COPY ./back-end .

RUN npm run build

CMD ["npm", "run", "dev"]


