FROM node:latest
COPY ./ /demo/
WORKDIR /demo
RUN npm i
EXPOSE 3000
CMD ["node","/demo/app.js"]