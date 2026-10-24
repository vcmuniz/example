FROM nginx:alpine
ARG API_URL=http://localhost:3000
ARG APP_VERSION=dev
COPY index.html /usr/share/nginx/html/index.html.template
RUN sed -e "s|__API_URL__|${API_URL}|g" -e "s|__APP_VERSION__|${APP_VERSION}|g" /usr/share/nginx/html/index.html.template > /usr/share/nginx/html/index.html && rm /usr/share/nginx/html/index.html.template
EXPOSE 80
