FROM node:hydrogen-alpine3.18

ARG name=hl

WORKDIR /home/$name/app

COPY ./app/_hl /home/$name/app/
COPY ./certs/ /home/$name/app/

# Install dependencies
RUN npm install

# Setup user privileges (not-root)
RUN addgroup -S $name && \
    adduser -DHS $name $name && \
    chown -R $name:$name /home/$name/app && \
    # needed for "npm start" command
    chown -R 100:65533 /home/$name

USER $name

CMD ["npm", "start"]