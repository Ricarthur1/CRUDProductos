from node as build
workdir ./app
copy package.json .
run npm install
copy . .
run npm run build



from nginx
copy --from=build /app/dist /usr/share/nginx/html
expose 80
CMD ["nginx", "-g", "daemon off;"]