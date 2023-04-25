FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn build



FROM caddy:alpine as prod
RUN mkdir -p /app
COPY --from=build-stage /app/dist /app
COPY Caddyfile /etc/caddy/Caddyfile
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]