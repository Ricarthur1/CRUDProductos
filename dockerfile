from node as build
workdir ./app
copy package.json .
run npm install
copy . .
run npm run build



FROM nginx:1.13.12-alpine
copy --from=build /app/dist /usr/share/nginx/html
expose 80
CMD ["nginx", "-g", "daemon off;"]