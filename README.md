# Qoco Sample Project

## Docker workspace

Inside `workspaces/docker` there are 2 folders. 
1. `qoco` is for building and running the application with its 3 components (Posgresql, backend and frontend) inside Docker container.
2. `qoco-dev` is for setting up Postgresql for development.

## How to run application?

Follow below step to run application
1. `cd workspaces/docker/qoco`
1. `make start`
1. `docker ps` should show something similar to this

```
CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS                    PORTS                    NAMES
c7a63da49e60   qoco-frontend   "docker-entrypoint.s…"   8 minutes ago    Up 8 minutes              0.0.0.0:3001->3001/tcp   qoco-frontend
ff5d395ee08a   qoco-backend    "docker-entrypoint.s…"   13 minutes ago   Up 13 minutes             0.0.0.0:3000->3000/tcp   qoco-backend
20c21cf7ad15   postgres:16     "docker-entrypoint.s…"   13 minutes ago   Up 13 minutes (healthy)   0.0.0.0:5432->5432/tcp   qoco-postgres

```
4. Open your browser at `http://localhost:3001`

## How to develop?

1. Open `qoco.code-workspace` with VSCode
1. From root folder run `yarn` to install dependencies.
1. To start backend run
- `cd workspaces/backend`
- `yarn start:dev`
1. To start frontend run
- `cd workspaces/frontend`
- `yarn start:dev`

