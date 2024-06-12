FROM node:22-alpine AS builder

COPY . /app

WORKDIR /app

RUN yarn install --immutable

WORKDIR /app/workspaces/backend

RUN yarn build

FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder \
   /app/package.json \
   /app/yarn.lock \
   ./

COPY --from=builder \
   /app/workspaces/shared \
   ./workspaces/shared/

COPY --from=builder \
   /app/workspaces/backend/package.json \
   ./workspaces/backend/

COPY --from=builder \
  /app/workspaces/backend/dist \
  ./workspaces/backend/dist

RUN yarn install --immutable --production

WORKDIR /app/workspaces/backend

EXPOSE 3000

CMD ["yarn", "start:prod"]
