# from node as build
# workdir /app
# copy package.json .
# run npm install
# copy . .
# run npm run build



# FROM nginx:1.13.12-alpine
# copy --from=build /app/dist/productos /usr/share/nginx/html
# expose 80
# CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /app

# Add the source code to app
COPY . .

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/productos /usr/share/nginx/html

# Expose port 80
EXPOSE 80