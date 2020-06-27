# command: docker run --name vue-training-app -d -p 8085:80 vue-training-app

FROM nginx
COPY dist /usr/share/nginx/html