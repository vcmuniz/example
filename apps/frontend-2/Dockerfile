FROM nginx:alpine
ARG API_URL=http://localhost:3000
COPY index.html /usr/share/nginx/html/index.html.template
RUN sed "s|__API_URL__|${API_URL}|g" /usr/share/nginx/html/index.html.template > /usr/share/nginx/html/index.html && rm /usr/share/nginx/html/index.html.template
EXPOSE 80
