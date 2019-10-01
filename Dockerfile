FROM node:8.11.3-alpine

WORKDIR /app

RUN apk update && \
    npm install -g npm vue-cli

EXPOSE 9000

CMD ["/bin/sh"]