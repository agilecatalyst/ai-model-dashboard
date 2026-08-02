FROM nginx:alpine

# Copy static assets into Nginx html directory
COPY index.html beyondconscious.html app.js /usr/share/nginx/html/
COPY public/ /usr/share/nginx/html/public/
COPY dist/ /usr/share/nginx/html/dist/
COPY system_cards/ /usr/share/nginx/html/system_cards/

EXPOSE 80
