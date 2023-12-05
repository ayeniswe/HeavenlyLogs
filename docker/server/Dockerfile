FROM node:hydrogen-alpine3.18

ARG name=node

WORKDIR /home/$name/app

COPY ./app/services/server /home/$name/app

# Install dependencies
RUN npm install

# Setup user privileges (not-root)
RUN addgroup -S $name && \
    adduser -DHS $name $name && \
    chown -R $name:$name /home/$name/app && \
    # needed for "npx tsx" command
    chown -R 100:65533 /home/server

USER $name

CMD ["npm", "start"]