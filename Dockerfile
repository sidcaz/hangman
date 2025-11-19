# Stage 1: Build the React application
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build


# Stage 2: Serve the React application with a Node.js server
FROM node:24-alpine AS production
WORKDIR /app
COPY --from=build /app/build ./build
RUN npm install -g serve # Install a simple static file server
EXPOSE 3000 
CMD ["serve", "-s", "build", "-l", "3000"]