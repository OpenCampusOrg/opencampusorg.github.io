FROM node:lts-alpine
ADD . /www
WORKDIR /www
ENV PORT=5500
ENV HOST=0.0.0.0
EXPOSE 5500
RUN apk update
RUN apk upgrade
RUN npm ci
RUN npm run build
VOLUME /www
CMD [ "/bin/sh" ]
