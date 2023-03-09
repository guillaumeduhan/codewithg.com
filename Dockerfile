FROM node:17-alpine

WORKDIR /app

RUN apk update && apk upgrade
RUN apk add git

COPY ./package*.json /app/

RUN apk add git python3 g++ make

RUN npm install && npm cache clean --force

COPY . .

ENV PATH ./node_modules/.bin/:$PATH

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

# Expose the port that the application will run on
EXPOSE 3000
EXPOSE 24678

# Start the application in the container
CMD [ "npm", "dev" ]