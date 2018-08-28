# Base image for nodes.js applications
FROM node:alpine

# Create app directory
RUN mkdir /usr/src | mkdir /usr/src/app

# Copying the code to the folder
COPY src/handlers.js /usr/src/app/
COPY src/web-mysql.js /usr/src/app/
COPY src/package.json /usr/src/app/
COPY src/package-lock.json /usr/src/app/

# Setting WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
RUN npm install -d
RUN npm install express --save
RUN npm install lodash
RUN npm install promise-mysql

# Service Port
EXPOSE 80

# Command line to be executed
CMD [ "node", "web-mysql.js" ]
