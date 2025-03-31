ARG NODE_VERSION=22.14.0
ARG PNPM_VERSION=10.5.0

FROM node:${NODE_VERSION}-alpine AS build

WORKDIR /app

COPY package.json ./

RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

RUN pnpm install

COPY . .

RUN pnpm build

FROM nginx:alpine as production

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


