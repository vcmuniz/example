FROM node:22-alpine
ARG APP_VERSION=dev

WORKDIR /app
COPY package.json ./
COPY src ./src

ENV NODE_ENV=production
ENV APP_VERSION=${APP_VERSION}
EXPOSE 3000
CMD ["npm", "start"]
