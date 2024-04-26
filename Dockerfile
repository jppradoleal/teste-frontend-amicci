FROM node:20.12.2 AS build
COPY . .
RUN npm ci
RUN npm run build

FROM pierrezemb/gostatic AS run
COPY --from=build ./dist /srv/http/
EXPOSE 5173
