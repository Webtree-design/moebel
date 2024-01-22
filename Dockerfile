## Use Node Slim image
FROM node:16

COPY package.json .
RUN npm install
#RUN npm run build:ssr #run manually  
COPY . .
EXPOSE 4002

CMD ["node", "dist/harley/server/main.js"]