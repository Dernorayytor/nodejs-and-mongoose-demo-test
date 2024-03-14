# # FROM node:14-alpine
# FROM node:16-alpine
# WORKDIR /app

# COPY package*.json ./
# COPY src ./

# RUN npm install

# # COPY . .
# EXPOSE 3000

# CMD ["node","server.js"]
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
COPY src ./
RUN npm install
EXPOSE 3000
CMD [ "node", "./server.js" ]