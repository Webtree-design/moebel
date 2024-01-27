## Use Node Slim image
FROM node:16

COPY package.json .
RUN npm install --force
#RUN npm run build:ssr #run manually  
COPY . .
EXPOSE 4003

CMD ["node", "dist/moebel/server/main.js"]