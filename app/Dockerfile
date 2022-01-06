FROM node:12-alpine

RUN mkdir -p /app/api
RUN mkdir -p /app/client

ADD api /app/api/
ADD client /app/client/

RUN apk add --no-cache build-base
RUN cd /app/api && npm install && npm run tsc
RUN cd /app/client && npm install && npm run build:prd
RUN apk del build-base

# COPY docker-entrypoint.sh /usr/local/bin/
# ENTRYPOINT ["docker-entrypoint.sh"]

WORKDIR /app/api

EXPOSE 3000

CMD node build/index.js
