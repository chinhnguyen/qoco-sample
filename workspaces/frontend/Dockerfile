FROM node:22-alpine AS builder

COPY . /app

WORKDIR /app/workspaces/frontend

RUN yarn install --immutable \ 
  && yarn build

FROM node:22-alpine AS runner

WORKDIR /app

COPY --from=builder /app/workspaces/frontend/dist ./

EXPOSE 3001

CMD ["npx", "serve", ".", "-p", "3001"]
