## use the official nginx image
FROM nginx

## copy configuration file
COPY nginx.conf /etc/nginx/nginx.conf

RUN nginx -t

# Expose port 443 
EXPOSE 443
