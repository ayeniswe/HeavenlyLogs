FROM node:hydrogen-alpine3.18

WORKDIR /app

COPY ./app/services/server /app

ARG name=node

# Install dependencies
RUN npm install express cors

# Setup user privileges (not-root)
RUN addgroup -S $name && \
    adduser -DHS $name $name && \
    chown -R $name:$name /app

USER $name


CMD ["node", "server.js", "--development"]