FROM node:10.15.3 AS build-env
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .

FROM gcr.io/distroless/nodejs
COPY --from=build-env /app /app
WORKDIR /app
CMD ["index.js"]
